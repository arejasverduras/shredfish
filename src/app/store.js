import { configureStore } from '@reduxjs/toolkit';
import ForeCastDataSlice from '../features/ForeCastData/ForeCastDataSlice';
import TidesResultSlice from '../components/TidesResult/TidesResultSlice';
import SpotSlice from '../components/SpotSelector/SpotSlice';

export const store = configureStore({
  reducer: {
    spot: SpotSlice,
    forecast: ForeCastDataSlice,
    tides: TidesResultSlice
  },
});
