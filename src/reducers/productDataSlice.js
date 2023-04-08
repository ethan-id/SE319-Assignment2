import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductData } = productDataSlice.actions;

export default productDataSlice.reducer;