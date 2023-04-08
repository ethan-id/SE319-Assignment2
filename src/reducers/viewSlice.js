import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const viewSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setView } = viewSlice.actions

export default viewSlice.reducer