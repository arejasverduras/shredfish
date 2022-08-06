import { configureStore } from '@reduxjs/toolkit';
import ForeCastDataSlice from '../features/ForeCastData/ForeCastDataSlice';

export const store = configureStore({
  reducer: {
    forecast: ForeCastDataSlice
  },
});
