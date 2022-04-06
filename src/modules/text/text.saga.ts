import { AxiosResponse } from 'axios';
import { takeLatest, all, fork, put } from 'redux-saga/effects';

import Http from '@http';
import { ResponseText } from './text.models';
import { actionGetText, GET_TEXT_REQUEST } from './text.actions';

function* workerGetText() {
  try {
    const response: AxiosResponse<ResponseText> = yield Http.instance.get(
      `text/textGroupCode/MAIN`
    );

    if (response.status === 200) {
      yield put(actionGetText.success(response.data));
    } else {
      yield put(actionGetText.failure());
    }
  } catch (error) {
    console.error(error);
  }
}

function* watchGetText() {
  yield takeLatest(GET_TEXT_REQUEST, workerGetText);
}

export default function* textSaga() {
  yield all([fork(watchGetText)]);
}
