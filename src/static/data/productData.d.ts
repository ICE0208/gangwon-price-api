interface IPrices {
  강원도: number;
  춘천시: number;
  원주시: number;
  강릉시: number;
  동해시: number;
  태백시: number;
  속초시: number;
  삼척시: number;
  홍천군: number;
  횡성군: number;
  영월군: number;
  평창군: number;
  정선군: number;
  철원군: number;
  화천군: number;
  양구군: number;
  인제군: number;
  고성군: number;
  양양군: number;
}

export interface IProduct {
  name: string;
  prices: IPrices;
}
