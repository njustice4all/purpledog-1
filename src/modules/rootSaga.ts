import { all, fork } from 'redux-saga/effects';

import bannerSaga from './banner/banner.saga';
import wineSaga from './wine/wine.saga';
import textSaga from './text/text.saga';

export function* rootSaga() {
  yield all([fork(bannerSaga), fork(textSaga), fork(wineSaga)]);
}
