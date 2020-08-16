import createSagaMiddleware from 'redux-saga';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { reducer as items } from './slices/items';

import rootSaga from './sagas';

export const reducer = combineReducers({
  items,
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
