import { all, fork } from 'redux-saga/effects';

import bannerSaga from './banner/banner.saga';

export function* rootSaga() {
  yield all([fork(bannerSaga)]);
}
