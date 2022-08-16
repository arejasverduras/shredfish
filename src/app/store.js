import { configureStore } from '@reduxjs/toolkit';
import ForeCastDataSlice from '../features/ForeCastData/ForeCastDataSlice';
import TidesResultSlice from '../containers/TidesResult/TidesResultSlice';
import SpotSlice from '../components/SpotSelector/SpotSlice';
import WindSlice from '../containers/WindResult/WindSlice';
import OpenWeatherSlice from '../features/OpenWeather/OpenWeatherSlice';

export const store = configureStore({
  reducer: {
    spot: SpotSlice,
    forecast: ForeCastDataSlice,
    tides: TidesResultSlice,
    wind: WindSlice,
    openweather: OpenWeatherSlice
  },
});
