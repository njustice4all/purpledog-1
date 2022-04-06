import { combineReducers } from 'redux';

import { RootState } from './rootState';
import bannerReducer from './banner/banner.reducer';

const createRootReducer = combineReducers<RootState>({
  banner: bannerReducer,
});

export default createRootReducer;
