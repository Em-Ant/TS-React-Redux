import { combineReducers, Reducer } from 'redux';
import {
  getStateFromStorage,
  getUid,
  saveStateToStorage,
  deleteStorage
} from './helpers';

import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM,
  DELETE_ALL,
  ItemsActions,
  AddItemAction,
  EditItemAction,
  DeleteItemAction
} from './actions';

import { Item } from '../models';

const addItem = (state: readonly Item[], { payload }: AddItemAction): readonly Item[] => {
  const newState = [...state, { ...payload, id: getUid() }];
  saveStateToStorage(newState);
  return newState;
};

const editItem = (state: readonly Item[], { payload, index }: EditItemAction): readonly Item[] => {
  const newState: Item[] = [...state];
  if (newState[index]) newState[index] = { ...newState[index], ...payload };
  saveStateToStorage(newState);
  return newState;
};

const deleteItem = (state: readonly Item[], { index }: DeleteItemAction): readonly Item[] => {
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  saveStateToStorage(newState);
  return newState;
};

const deleteAll = (): Item[] => {
  deleteStorage();
  return [];
};

const items: Reducer<readonly Item[], ItemsActions> = (
  state = getStateFromStorage(),
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      return addItem(state, action);
    case EDIT_ITEM:
      return editItem(state, action);
    case DELETE_ITEM:
      return deleteItem(state, action);
    case DELETE_ALL:
      return deleteAll();
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items
});

export { rootReducer };
