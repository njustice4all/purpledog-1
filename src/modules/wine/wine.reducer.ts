import { createReducer } from 'typesafe-actions';

import { RootAction } from 'modules/rootAction';
import { IWineState } from './wine.models';
import { GET_WINE_FAILURE, GET_WINE_REQUEST, GET_WINE_SUCCESS } from './wine.actions';

const initialState = {
  isFetching: false,
  subscriptionWineRecommend: [],
  selectTimeSaleWine: [],
  selectPopularWine: [],
};

const wineReducer = createReducer<IWineState, RootAction>(initialState, {
  [GET_WINE_REQUEST]: (state) => ({ ...state, isFetching: true }),
  [GET_WINE_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    [action.payload.name]: action.payload.results,
  }),
  [GET_WINE_FAILURE]: () => initialState,
});

export default wineReducer;
