import { createStore , applyMiddleware, compose } from 'redux';
import createSagaMiddleware  from 'redux-saga';

import { rootReducer } from './reducer';
import rootSaga from './sagas';

const {
  __REDUX_DEVTOOLS_EXTENSION__
} = window;

const isProduction = process.env.NODE_ENV === 'production';
const devtools = isProduction
  ? undefined
  : __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  devtools
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;