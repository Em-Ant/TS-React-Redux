import { delay, put, all } from 'redux-saga/effects';
import Maybe from '../../utils/Maybe';

const getRandomPayload = () => {
  const x = Math.random() > 0.1 ? Math.random() * 5 : null;
  return Maybe.of(x)
    .map(x => (x > 2 ? x * 2 : undefined))
    .flatMap(x => (x < 9 ? Maybe.of(x) : Maybe.Nothing()))
    .getOrElse('invalid');
};

function* heartBeat() {
  while (true) {
    yield delay(5000);
    yield put({ type: 'KEEP_ALIVE', payload: getRandomPayload() });
  }
}

export default function* rootSaga() {
  yield all([heartBeat()]);
}
