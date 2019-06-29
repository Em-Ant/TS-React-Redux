import { createStore } from 'redux';

const {
  __REDUX_DEVTOOLS_EXTENSION__
} = window;

const isProduction = process.env.NODE_ENV === 'production';
const devtools = isProduction
  ? undefined
  : __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__();

import { rootReducer } from './reducer';

const store = createStore(rootReducer, devtools);

export const asyncAction = (action) => {
  const { dispatch, getState } = store;
  return async () => action(dispatch, getState);
};

export default store;