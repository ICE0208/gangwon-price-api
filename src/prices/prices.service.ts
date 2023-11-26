import { Injectable } from '@nestjs/common';
import getStaticPath from '../utils/getStaticPath';
import readFileAsync from '../utils/readFileAsync';
import fakeData from '../static/data/fakeData';

@Injectable()
export class PricesService {
  async getLocalPrice({ product }: { product?: string }) {
    // const filePath = getStaticPath('/data/test.json');

    if (product === undefined) {
      return {
        ok: false,
        error: `상품명을 입력해주세요. (ex: http://{baseurl}/prices?product={상품명})`,
      };
    }

    const productData = fakeData.find((element) => element.name === product);
    if (productData === undefined) {
      return { ok: false, error: `${product}에 대한 상품 정보가 없습니다.` };
    }

    return { ok: true, data: productData };

    // try {
    //   const fileContent = await readFileAsync(filePath);
    //   return { ok: true, data: JSON.parse(fileContent.toString()) };
    // } catch (error) {
    //   return { ok: false, error: `Failed to read the file (${filePath})` };
    // }
  }
}
