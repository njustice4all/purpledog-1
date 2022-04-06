import { combineReducers } from 'redux';

import { RootState } from './rootState';
import bannerReducer from './banner/banner.reducer';
import textReducer from './text/text.reducer';
import wineReducer from './wine/wine.reducer';

const createRootReducer = combineReducers<RootState>({
  banner: bannerReducer,
  text: textReducer,
  wine: wineReducer,
});

export default createRootReducer;
