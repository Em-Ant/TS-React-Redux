import createSagaMiddleware from 'redux-saga';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { reducer as items } from './slices/items';
import { reducer as test } from './slices/test';

import rootSaga from './sagas';

const reducer = combineReducers({
  items,
  test,
});

const sagaMiddleware = createSagaMiddleware();

const defaultMW = getDefaultMiddleware({
  thunk: false,
});

const store = configureStore({
  reducer,
  middleware: [...defaultMW, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducer>;
export type Dispatch = typeof store.dispatch;
export default store;
