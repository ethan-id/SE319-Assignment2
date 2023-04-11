import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    confirm: (state) => {
      state.value = 1
    },
  },
});

export const { confirm } = confirmSlice.actions;

export default confirmSlice.reducer;