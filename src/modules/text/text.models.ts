import { CommonResponse } from 'model';

export interface ITextState {
  [index: string]: Text;
}

type Key =
  | 'EVENT_DESCRIPTION'
  | 'EVENT_TITLE'
  | 'RECOMMEND_PRODUCT_2_DESCRIPTION'
  | 'COUNTRY_WINE_TITLE'
  | 'PERSONAL_RECOMMEND_DESCRIPTON'
  | 'RECOMMEND_PRODUCT_2_TITLTE'
  | 'PERSONAL_RECOMMEND_TITLE'
  | 'RECOMMEND_PRODUCT_1_TITLE'
  | 'COUNTRY_WINE__DESCRIPTION';

type Text = {
  textId: number;
  textGroupCodeId: string;
  textGroupCodeName: string;
  textCodeId: string;
  description: string;
  content: string;
  createId: number;
  updateId: number;
};

export interface ResponseText extends CommonResponse {
  results: {
    [index in Key]: Text;
  };
}
