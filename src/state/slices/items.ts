import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUid } from '../helpers';
import type { Item } from '../../types/Item';

const initialState: Item[] = [];

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<Item>) => {
      state.push({ ...payload, id: getUid() });
    },
    editItem: (
      state,
      { payload }: PayloadAction<{ item: Item; index: number }>,
    ) => {
      if (state[payload.index])
        state[payload.index] = { ...state[payload.index], ...payload.item };
    },
    deleteItem: (
      state,
      { payload: { index } }: PayloadAction<{ index: number }>,
    ) => {
      const newState = state.filter((_, i) => i !== index);
      return newState;
    },
    deleteAll: () => {
      return [];
    },
    setState: (_, { payload }: PayloadAction<{ items: Item[] }>) => {
      return payload.items;
    },
  },
});

const { actions, reducer } = items;
const { addItem, editItem, deleteItem, deleteAll, setState } = actions;
export { reducer };
export { addItem, editItem, deleteItem, deleteAll, setState };
