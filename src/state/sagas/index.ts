import { delay, put, all } from 'redux-saga/effects';

function* heartBeat() {
  while (true) {
    yield delay(5000);
    yield put({ type: 'KEEP_ALIVE' });
  }
}

export default function* rootSaga() {
  yield all([heartBeat()]);
}
