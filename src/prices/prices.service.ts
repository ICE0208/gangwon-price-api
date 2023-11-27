import { Injectable } from '@nestjs/common';
import getStaticPath from '../utils/getStaticPath';
import readFileAsync from '../utils/readFileAsync';
import { IProduct } from '../static/data/productData';

@Injectable()
export class PricesService {
  async getLocalPrice({ product }: { product?: string }) {
    const filePath = getStaticPath('/data/productData.json');

    if (product === undefined) {
      return {
        ok: false,
        error: `상품명을 입력해주세요. (ex: http://{baseurl}/prices?product={상품명})`,
      };
    }

    try {
      const fileContent = await readFileAsync(filePath);
      const fakeDB = JSON.parse(fileContent.toString()) as IProduct[];

      const productData = fakeDB.find((element) => element.name === product);
      if (productData === undefined) {
        return { ok: false, error: `${product}에 대한 상품 정보가 없습니다.` };
      }

      return { ok: true, data: productData };
    } catch (error) {
      return { ok: false, error: `Failed to read the file (${filePath})` };
    }
  }
}
