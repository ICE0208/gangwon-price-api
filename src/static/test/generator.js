import fs from 'fs';
import csv from 'csv-parser';

const inputFilePath = 'src/static/test/price_data.csv';
const outputFilePath = 'src/static/test/generated.json';

const regions = [
  '춘천시',
  '원주시',
  '강릉시',
  '동해시',
  '태백시',
  '속초시',
  '삼척시',
  '홍천군',
  '횡성군',
  '영월군',
  '평창군',
  '정선군',
  '철원군',
  '화천군',
  '양구군',
  '인제군',
  '고성군',
  '양양군',
];

const result = [];

fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('data', (row) => {
    const itemData = {
      name: row.품목,
      prices: { 강원도: 0 },
    };

    let sum = 0;

    regions.forEach((region) => {
      sum += parseInt(row[region]);
    });

    const average = parseInt(sum / regions.length / 10) * 10;
    itemData.prices['강원도'] = average;

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
