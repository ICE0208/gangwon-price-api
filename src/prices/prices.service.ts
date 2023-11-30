import { Injectable } from '@nestjs/common';
import getStaticPath from '../utils/getStaticPath';
import readFileAsync from '../utils/readFileAsync';
import { IProduct } from '../static/data/productData';

@Injectable()
export class PricesService {
  // /prices?product={product} 경로를 함수입니다.
  async getLocalPrice({ product }: { product?: string }) {
    // product 쿼리가 주어지지 않았을 때 조건입니다.
    // product 쿼리는 필수로 주어져야 하므로 'ok: false'와 함께 리턴합니다.
    if (product === undefined) {
      return {
        ok: false,
        error: `상품명을 입력해주세요. (ex: http://{baseurl}/prices?product={상품명})`,
      };
    }

    // 데이터 파일의 저장 경로입니다.
    // src/static 아래부터 작성합니다.
    const filePath = getStaticPath('/data/productData.json');

    // 파일을 읽는 도중 에러가 발생할 수 있으므로 try-catch 문으로 감싸줍니다.
    try {
      // 파일을 불러와 JSON으로 파싱하면 IProduct 배열 나와야합니다.
      // 이 결과값인 배열을 fakeDB 변수에 저장합니다.
      const fileContent = await readFileAsync(filePath);
      const data = JSON.parse(fileContent.toString()) as IProduct[];

      // 데이터에 product가 있는지 찾습니다.
      // 성공 시 찾은 데이터를 리턴하고 실패하면 'ok: false'와 함께 리턴합니다.
      const productData = data.find((element) => element.name === product);
      if (productData === undefined) {
        return { ok: false, error: `${product}에 대한 상품 정보가 없습니다.` };
      }

      return { ok: true, data: productData };
    } catch (error) {
      return { ok: false, error: `Failed to read the file (${filePath})` };
    }
  }
}
