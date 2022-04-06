import { CommonResponse } from 'model';

export interface IRecommendWineState {
  isFetching: boolean;
  results: Wine[];
}

type Wine = {
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
};

export interface ResponseRecommendWine extends CommonResponse {
  results: Wine[];
}
