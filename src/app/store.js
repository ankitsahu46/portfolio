import { configureStore } from '@reduxjs/toolkit';
import animateProjectReducer from '../features/animateProject/animateProjectSlice';
import animateSkillsReducer from '../features/animateSkills/animateSkillsSlice';

export default configureStore({
  reducer: {
    animateProject: animateProjectReducer,
    animateSkills: animateSkillsReducer,
  }
})