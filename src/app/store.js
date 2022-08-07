import { configureStore } from '@reduxjs/toolkit';
import ForeCastDataSlice from '../features/ForeCastData/ForeCastDataSlice';
import TidesResultSlice from '../components/TidesResult/TidesResultSlice';

export const store = configureStore({
  reducer: {
    forecast: ForeCastDataSlice,
    tides: TidesResultSlice
  },
});
