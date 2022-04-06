import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { IRecommendWineState } from './recommendWine.models';
import {
  GET_RECOMMEND_WINE_FAILURE,
  GET_RECOMMEND_WINE_REQUEST,
  GET_RECOMMEND_WINE_SUCCESS,
} from './recommendWine.actions';

const initialState = {
  isFetching: false,
  results: [],
};

const recommendWineReducer = createReducer<IRecommendWineState, RootAction>(initialState, {
  [GET_RECOMMEND_WINE_REQUEST]: (state) => ({ ...state, isFetching: true }),
  [GET_RECOMMEND_WINE_SUCCESS]: (state, action) => ({
    isFetching: false,
    results: action.payload.results,
  }),
  [GET_RECOMMEND_WINE_FAILURE]: () => initialState,
});

export default recommendWineReducer;
