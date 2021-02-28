import { runSaga } from 'redux-saga';
import { put } from 'redux-saga/effects';

const sum = (a: number, b: number): number => a + b;

test('example', () => {
  expect(sum(5, 4)).toEqual(9);
});
const TEST = 'TEST' as const;
const emitTest = () => ({ type: TEST });
type TestAction = ReturnType<typeof emitTest>;

test('runsaga', () => {
  const dispatched: TestAction[] = [];
  const getState = () => ({ test: 'ok' });
  const dispatch = (action: any) => dispatched.push(action);
  runSaga(
    {
      dispatch,
      getState,
    },
    function* test() {
      yield put(emitTest());
    }
  );
  expect(dispatched).toEqual([emitTest()]);
});
