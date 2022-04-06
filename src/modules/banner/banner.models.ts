import { CommonResponse } from 'model';

export interface IBannerState {
  isFetching: boolean;
  MAIN_TOP: Banner[];
  MAIN_SUB_1: Banner[];
  MAIN_SUB_2: Banner[];
}

export type Banner = {
  bannerId: number;
  bannerGroupCodeId: string;
  bannerGroupCodeName: string;
  bannerCodeId: string;
  bannerCodeName: string;
  description: string;
  mainUseYn: boolean;
  thumbnailLinkUseYn: boolean;
  thumbnailLinkUrl: string;
  thumbnailImageUrl: string;
  useYn: boolean;
  sortingOrder: number;
  updateId: number;
  updateDate: string;
};

export interface RequestBanner {
  bannerCodeId: 'MAIN_TOP' | 'MAIN_SUB_1' | 'MAIN_SUB_2';
}

export interface ResponseBanner extends CommonResponse {
  results: Banner[];
}
