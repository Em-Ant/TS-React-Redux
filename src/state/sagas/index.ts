import { put, all, call, select, takeLatest } from 'redux-saga/effects';
import {
  setState,
  addItem,
  editItem,
  deleteItem,
  deleteAll,
} from '../slices/items';
import {
  getStateFromStorage,
  saveStateToStorage,
  deleteStorage,
} from '../helpers';
import { Item } from 'src/models';
import { RootState } from '..';

function* loadInitialState() {
  const items = yield call(getStateFromStorage);
  yield put(setState({ items }));
}

function* updateLocalStorage() {
  const items: Item[] = yield select((state: RootState) => state.items);
  yield call(saveStateToStorage, items);
}

function* clearLocalStorage() {
  yield call(deleteStorage);
}

function* syncUpdateStorage() {
  yield takeLatest(
    [addItem.toString(), editItem.toString(), deleteItem.toString()],
    updateLocalStorage
  );
}

function* syncClearStorage() {
  yield takeLatest(deleteAll.toString(), clearLocalStorage);
}

export default function* rootSaga() {
  yield all([loadInitialState(), syncUpdateStorage(), syncClearStorage()]);
}
