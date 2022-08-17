import { configureStore } from '@reduxjs/toolkit';
import TidesResultSlice from '../containers/TidesResult/TidesResultSlice';
import SpotSlice from '../components/SpotSelector/SpotSlice';
import WindSlice from '../containers/WindResult/WindSlice';
import OpenWeatherSlice from '../containers/WeatherResult/OpenWeatherSlice';

import StormSlice from '../containers/GetStorm/StormSlice';

export const store = configureStore({
  reducer: {
    spot: SpotSlice,
    storm: StormSlice,
    tides: TidesResultSlice,
    wind: WindSlice,
    openweather: OpenWeatherSlice
  },
});
