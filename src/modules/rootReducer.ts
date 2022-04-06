import { combineReducers } from 'redux';

import { RootState } from './rootState';
import bannerReducer from './banner/banner.reducer';
import textReducer from './text/text.reducer';
import recommendWineReducer from './recommendWine/recommendWine.reducer';

const createRootReducer = combineReducers<RootState>({
  banner: bannerReducer,
  text: textReducer,
  recommendWine: recommendWineReducer,
});

export default createRootReducer;
