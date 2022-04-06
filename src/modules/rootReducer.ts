import { combineReducers } from 'redux';

import { RootState } from './rootState';
import bannerReducer from './banner/banner.reducer';
import textReducer from './text/text.reducer';

const createRootReducer = combineReducers<RootState>({
  banner: bannerReducer,
  text: textReducer,
});

export default createRootReducer;
