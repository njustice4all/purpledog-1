import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { IBannerState } from './banner.models';
import { GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_BANNER_FAILURE } from './banner.actions';

const initialState = {
  isFetching: false,
  MAIN_TOP: [],
  MAIN_SUB_1: [],
  MAIN_SUB_2: [],
};

const bannerReducer = createReducer<IBannerState, RootAction>(initialState, {
  [GET_BANNER_REQUEST]: (state) => ({ ...state, isFetching: true }),
  [GET_BANNER_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    [action.payload.bannerCodeId]: action.payload.results,
  }),
  [GET_BANNER_FAILURE]: () => initialState,
});

export default bannerReducer;
