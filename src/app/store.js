import { configureStore } from '@reduxjs/toolkit';
import ForeCastDataSlice from '../features/ForeCastData/ForeCastDataSlice';
import TidesResultSlice from '../components/TidesResult/TidesResultSlice';
import SpotSlice from '../components/SpotSelector/SpotSlice';
import WindSlice from '../components/WindResult/WindSlice';
import WeatherSlice from '../components/WeatherResult/WeatherSlice';
import OpenWeatherSlice from '../features/OpenWeather/OpenWeatherSlice';

export const store = configureStore({
  reducer: {
    spot: SpotSlice,
    forecast: ForeCastDataSlice,
    tides: TidesResultSlice,
    wind: WindSlice,
    weather: WeatherSlice,
    openweather: OpenWeatherSlice
  },
});
