import { Injectable } from '@nestjs/common';
import { IProduct } from 'src/static/data/productData';
import getStaticPath from 'src/utils/getStaticPath';
import readFileAsync from 'src/utils/readFileAsync';

@Injectable()
export class ProductsService {
  async getProductsName() {
    // 데이터 파일의 저장 경로입니다.
    // src/static 아래부터 작성합니다.
    const filePath = getStaticPath('/data/productData.json');

    // 파일을 읽는 도중 에러가 발생할 수 있으므로 try-catch 문으로 감싸줍니다.
    try {
      // 파일을 불러와 JSON으로 파싱하면 IProduct 배열 나와야합니다.
      // 이 결과값인 배열을 fakeDB 변수에 저장합니다.
      const fileContent = await readFileAsync(filePath);
      const data = JSON.parse(fileContent.toString()) as IProduct[];

      const productNames = data.map((element) => element.name);
      const response = {
        ok: true,
        data: {
          _count: productNames.length,
          productNames,
        },
      };

      return response;
    } catch (error) {
      return { ok: false, error: `Failed to read the file (${filePath})` };
    }
  }
}
