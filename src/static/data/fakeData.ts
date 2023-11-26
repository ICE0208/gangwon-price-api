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

export interface IProduct {
  name: string;
  prices: IPrices;
}

const fakeData: IProduct[] = [
  {
    name: '설렁탕',
    prices: {
      충청남도: 6000,
      공주시: 5800,
      금산군: 5900,
      논산시: 6100,
      당진시: 6200,
      보령시: 6300,
      부여군: 6400,
      서산시: 6500,
      서천군: 6600,
      아산시: 6700,
      예산군: 6800,
      천안시: 6900,
      청양군: 7000,
      태안군: 7100,
      홍성군: 5700,
      계롱시: 5600,
    },
  },
];

export default fakeData;
