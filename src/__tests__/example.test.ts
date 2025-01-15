import { UnknownAction } from '@reduxjs/toolkit';
import { runSaga } from 'redux-saga';
import { put } from 'redux-saga/effects';

const sum = (a: number, b: number): number => a + b;

test('example', () => {
  expect(sum(5, 4)).toEqual(9);
});
const TEST = 'TEST';
const emitTest = () => ({ type: TEST });
type TestAction = ReturnType<typeof emitTest>;

test('runsaga', () => {
  const dispatched: TestAction[] = [];
  const getState = () => ({ test: 'ok' });
  const dispatch = (action: UnknownAction) => dispatched.push(action);
  runSaga(
    {
      dispatch,
      getState,
    },
    function* test() {
      yield put(emitTest());
    },
  );
  expect(dispatched).toEqual([emitTest()]);
});
