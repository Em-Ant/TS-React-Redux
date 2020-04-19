import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const test = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    set: (state, { payload }: PayloadAction<number | 'invalid'>) =>
      payload === 'invalid' ? state : payload,
  },
});

const { actions, reducer } = test;
const { set } = actions;
export { reducer };
export { set };
export default test;
