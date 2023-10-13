import { createSlice } from '@reduxjs/toolkit';

export const animateSkillsSlice = createSlice({
  name: 'animateSkills',
  initialState: {
    value: false
  },
  reducers: {
    setTrue: state => {
      state.value = true;
    }
  }
})

export const { setTrue } = animateSkillsSlice.actions;

export default animateSkillsSlice.reducer;