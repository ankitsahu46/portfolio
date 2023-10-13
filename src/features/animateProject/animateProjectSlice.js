import { createSlice } from '@reduxjs/toolkit'

export const animateProjectSlice = createSlice({
  name: 'animateProject',
  initialState: {
    value: [false, false, false]
  },
  reducers: {
    set0: (state, action) => {
      state.value[0] = action.payload;
    },
    set1: (state, action) => {
      state.value[1] = action.payload;
    },
    set2: (state, action) => {
      state.value[2] = action.payload;
    }
  }
})

export const { set0, set1, set2 } = animateProjectSlice.actions

export default animateProjectSlice.reducer