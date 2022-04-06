import { AxiosResponse } from 'axios';
import { all, fork, put, takeEvery } from 'redux-saga/effects';

import Http from '@http';
import { actionGetWine, GET_WINE_REQUEST } from './wine.actions';
import { ResponseWine } from './wine.models';

function* workerGetWine(action: ReturnType<typeof actionGetWine.request>) {
  try {
    const { name } = action.payload;
    const response: AxiosResponse<ResponseWine> = yield Http.instance.get(`/product/${name}`);

    if (response.status === 200) {
      yield put(actionGetWine.success({ name, results: response.data.results }));
    } else {
      yield put(actionGetWine.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetWine() {
  yield takeEvery(GET_WINE_REQUEST, workerGetWine);
}

export default function* wineSaga() {
  yield all([fork(watchGetWine)]);
}
