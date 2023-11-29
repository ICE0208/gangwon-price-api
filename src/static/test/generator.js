import fs from 'fs';
import csv from 'csv-parser';
import { log } from 'console';

const inputFilePath = 'src/static/test/real_data.csv';
const outputFilePath = 'src/static/test/generated.json';

const regions = [
  '공주시',
  '금산군',
  '논산시',
  '당진시',
  '보령시',
  '부여군',
  '서산시',
  '서천군',
  '아산시',
  '예산군',
  '천안시',
  '청양군',
  '태안군',
  '홍성군',
  '계룡시',
];

const result = [];

fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('data', (row) => {
    const itemData = {
      name: row.품목명,
      prices: { 충청남도: 0 },
    };

    let sum = 0;

    regions.forEach((region) => {
      sum += parseInt(row[region]);
    });

    const average = parseInt(sum / regions.length / 10) * 10;
    itemData.prices['충청남도'] = average;

    regions.forEach((region) => {
      const price = parseInt(row[region]);
      itemData.prices[region] = price;
    });
    result.push(itemData);
  })
  .on('end', () => {
    const jsonResult = JSON.stringify(result, null, 2);

    fs.writeFileSync(outputFilePath, jsonResult);

    console.log('Conversion completed.');
  });
