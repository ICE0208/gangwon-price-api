import * as fs from 'fs';
import * as path from 'path';

interface IPrices {
  충청남도: number;
  공주시: number;
  금산군: number;
  논산시: number;
  당진시: number;
  보령시: number;
  부여군: number;
  서산시: number;
  서천군: number;
  아산시: number;
  예산군: number;
  천안시: number;
  청양군: number;
  태안군: number;
  홍성군: number;
  계롱시: number;
}

interface IProduct {
  name: string;
  prices: IPrices;
}
const itemNames = [
  '설렁탕',
  '냉면',
  '삼계탕',
  '갈비탕',
  '불고기(공기밥제외)',
  '등심구이',
  '삼겹살(외식)',
  '된장찌개백반',
  '김치찌개백반',
  '튀김닭',
  '생선초밥',
  '비빔밥',
  '김밥',
  '칼국수',
  '라면(외식)',
  '자장면',
  '짬뽕',
  '탕수육',
  '돼지갈비',
  '돈가스',
  '쇠갈비',
  '햄버거',
  '피자',
  '다방커피',
  '다방 국산차',
  'PC방이용료',
  '택배수수료',
  '양복세탁료',
  '영화관람료',
  '수영장이용료',
  '볼링장이용료',
  '골프연습장이용료',
  '당구장이용료',
  '영상매체대여료',
  '노래방이용료',
  '사진촬영료',
  '사진인화료',
  '이용료',
  '미용료(드라이)',
  '미용료(파마)',
  '미용료(커트)',
  '목욕료(성인)',
  '목욕료(아동)',
  '숙박료(여관)',
  '학원비(중학생)',
  '생맥주',
  '경기장입장료',
  '찜질방이용료',
  '의복수선료',
];

const regions = [
  '충청남도',
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
  '계롱시',
];

const basePrices: Record<string, number> = {};
regions.forEach((region) => {
  basePrices[region] = Math.floor(Math.random() * 1000) * 10 + 3000;
});

const fakeData: IProduct[] = itemNames.map((item) => {
  const prices: IPrices = {} as IPrices;

  // Use the pre-generated base prices
  regions.forEach((itemName) => {
    prices[itemName] =
      basePrices[itemName] +
      Math.floor(Math.random() * 1000) * (Math.random() < 0.5 ? -1 : 1);
  });

  return {
    name: item,
    prices: prices,
  };
});

console.log(fakeData);

const jsonContent = JSON.stringify(fakeData, null, 2);

const filePath = path.join(__dirname, 'generated.json');

fs.writeFileSync(filePath, jsonContent, 'utf-8');

console.log(`${filePath} 파일이 생성되었습니다.`);

// console.log(fakeData);
