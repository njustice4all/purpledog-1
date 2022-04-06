import { createAsyncAction, ActionType } from 'typesafe-actions';

import { RequestBanner, ResponseBanner } from './banner.models';

type BannerCodeId = RequestBanner['bannerCodeId'];

export const GET_BANNER_REQUEST = 'GET_BANNER_REQUEST';
export const GET_BANNER_SUCCESS = 'GET_BANNER_SUCCESS';
export const GET_BANNER_FAILURE = 'GET_BANNER_FAILURE';
export const actionGetBanner = createAsyncAction(
  GET_BANNER_REQUEST,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILURE
)<
  { bannerCodeId: BannerCodeId },
  { bannerCodeId: BannerCodeId; results: ResponseBanner['results'] },
  undefined
>();

const actions = { actionGetBanner };

export type BannerActions = ActionType<typeof actions>;
