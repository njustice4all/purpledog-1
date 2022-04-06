import { all, fork } from 'redux-saga/effects';

import bannerSaga from './banner/banner.saga';
import textSaga from './text/text.saga';

export function* rootSaga() {
  yield all([fork(bannerSaga), fork(textSaga)]);
}
