import { Injectable } from '@nestjs/common';
import getStaticPath from '../utils/getStaticPath';
import readFileAsync from '../utils/readFileAsync';

@Injectable()
export class PricesService {
  getPrice(item: string) {
    return { itemName: item, test: '33' };
  }

  async getFile() {
    const filePath = getStaticPath('/data/test.json');

    try {
      const fileContent = await readFileAsync(filePath);
      return { ok: true, data: JSON.parse(fileContent.toString()) };
    } catch (error) {
      return { ok: false, error: 'Failed to read the file' };
    }
  }
}
