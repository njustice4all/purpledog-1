import { CommonResponse } from 'model';

interface Wine {
  productId: number;
  useYn: string;
  viewYn: string;
  englishName: string;
  productCode: string;
  categoryId: number;
  title: string;
  statusCode: string;
  statusCodeName: string;
  weight: number;
  salesPrice: number;
  dry: number;
  body: number;
  tannins: number;
  acidity: number;
  bubble: number;
  overall: number;
  alc: number;
  wineryName: string;
  description: string;
  productUrl: string;
  thumbnailImageUrl: string;
  taxYn: string;
  regionId: number;
  regionName: string;
  countryId: number;
  countryName: string;
  pointDescription: string;
  styleNames: string;
  dryNames: string;
  productOnSales: boolean;
}

interface TimeSaleWine extends Wine {
  name: string;
  discountPercent: number;
  discountPrice: number;
  timeSaleDiscountPercent: number;
  timeSalePrice: number;
  timeSaleStartDate: string;
  timeSaleEndDate: string;
  subscriptionYn: string;
}

interface PopularWine extends Wine {
  name: string;
  wineTypeName: string;
  grapeName: string;
  grapeEnglishName: string;
  originName: string;
  wineTypeCode: string;
}

export interface IWineState {
  isFetching: boolean;
  subscriptionWineRecommend: Wine[];
  selectTimeSaleWine: TimeSaleWine[];
  selectPopularWine: PopularWine[];
}

export interface RequestWine {
  name: 'subscriptionWineRecommend' | 'selectTimeSaleWine' | 'selectPopularWine';
}

export interface ResponseWine extends CommonResponse {
  results: Wine[] | TimeSaleWine[] | PopularWine[];
}
