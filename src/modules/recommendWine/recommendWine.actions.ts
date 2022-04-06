import { createAsyncAction, ActionType } from 'typesafe-actions';

import { ResponseRecommendWine } from './recommendWine.models';

export const GET_RECOMMEND_WINE_REQUEST = 'GET_RECOMMEND_WINE_REQUEST';
export const GET_RECOMMEND_WINE_SUCCESS = 'GET_RECOMMEND_WINE_SUCCESS';
export const GET_RECOMMEND_WINE_FAILURE = 'GET_RECOMMEND_WINE_FAILURE';
export const actionGetRecommendWine = createAsyncAction(
  GET_RECOMMEND_WINE_REQUEST,
  GET_RECOMMEND_WINE_SUCCESS,
  GET_RECOMMEND_WINE_FAILURE
)<undefined, ResponseRecommendWine, undefined>();

const actions = { actionGetRecommendWine };

export type RecommendWineActions = ActionType<typeof actions>;
