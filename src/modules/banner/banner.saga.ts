import { AxiosResponse } from 'axios';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

import Http from '@http';
import { ResponseBanner } from './banner.models';
import { actionGetBanner, GET_BANNER_REQUEST } from './banner.actions';

function* workerGetBanner(action: ReturnType<typeof actionGetBanner.request>) {
  try {
    const { bannerCodeId } = action.payload;
    const response: AxiosResponse<ResponseBanner> = yield Http.instance.get(
      `/banner/bannerCodeId/${bannerCodeId}`
    );

    if (response.status === 200) {
      yield put(actionGetBanner.success({ bannerCodeId, results: response.data.results }));
    } else {
      yield put(actionGetBanner.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetBanner() {
  yield takeEvery(GET_BANNER_REQUEST, workerGetBanner);
}

export default function* bannerSaga() {
  yield all([fork(watchGetBanner)]);
}
