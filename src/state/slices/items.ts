import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getStateFromStorage,
  getUid,
  saveStateToStorage,
  deleteStorage,
} from '../helpers';
import { Item } from 'src/models';

const items = createSlice({
  name: 'items',
  initialState: getStateFromStorage(),
  reducers: {
    addItem: (state, { payload }: PayloadAction<Item>) => {
      state.push({ ...payload, id: getUid() });
      saveStateToStorage(state);
    },
    editItem: (
      state,
      { payload }: PayloadAction<{ item: Item; index: number }>
    ) => {
      if (state[payload.index])
        state[payload.index] = { ...state[payload.index], ...payload.item };
      saveStateToStorage(state);
    },
    deleteItem: (
      state,
      { payload: { index } }: PayloadAction<{ index: number }>
    ) => {
      const newState = state.filter((_, i) => i !== index);
      saveStateToStorage(newState);
      return newState;
    },
    deleteAll: () => {
      deleteStorage();
      return [];
    },
  },
});

const { actions, reducer } = items;
const { addItem, editItem, deleteItem, deleteAll } = actions;
export { reducer };
export { addItem, editItem, deleteItem, deleteAll };
export default items;
