import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put } from 'redux-saga/effects';

import Http from '@http';
import { actionGetRecommendWine, GET_RECOMMEND_WINE_REQUEST } from './recommendWine.actions';
import { ResponseRecommendWine } from './recommendWine.models';

function* workerGetRecommendWine() {
  try {
    const response: AxiosResponse<ResponseRecommendWine> = yield Http.instance.get(
      `/product/subscriptionWineRecommend`
    );

    if (response.status === 200) {
      yield put(actionGetRecommendWine.success(response.data));
    } else {
      yield put(actionGetRecommendWine.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetRecommendWine() {
  yield takeLatest(GET_RECOMMEND_WINE_REQUEST, workerGetRecommendWine);
}

export default function* recommendWineSaga() {
  yield all([fork(watchGetRecommendWine)]);
}
