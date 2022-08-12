import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import GeoCoding from "./GeoCoding";
import { getHour } from "../features";

export const getOpenWeatherData = createAsyncThunk('/openweather/weatherinfo',
async (arg, thunkAPI) => {
    const response = await GeoCoding.getWeatherFromGeo(arg);
    return response.data;
})

const OpenWeatherSlice = createSlice({
    name: 'OpenWeather',
    initialState: {
        openWeatherStatus: 'idle',
        openWeatherData: {
            sunlightTimes: [],
            weather: []
        },
        currentWeather: {
                  
        }
    },
    reducers: {
        setCurrentOpenWeather: (state, action) => {
            state.currentWeather.temp = action.payload.temp;
            state.currentWeather.condition = action.payload.condition;
        }
    },
    extraReducers: {
        [getOpenWeatherData.pending]: (state,action) => {
            state.weatherStatus = 'loading';
            
        },
        [getOpenWeatherData.fulfilled]: (state,action) => {
            state.openWeatherStatus = 'succeeded';
            state.openWeatherData = (action.payload);
            const {hour} = getHour();

            // state.currentWeather = (action.payload.weather[hour])
            // for analyzing of the response object
            // console.log(state.currentWeather)
        },
        [getOpenWeatherData.rejected]: (state, action) => {
            state.openWeatherStatus = 'rejected';
            state.openWeatherData = 'The sun rose in the east';
        }
    }
})

// export slice actions
export const {setCurrentWeather} = OpenWeatherSlice.actions;

//create and export sliceSelector 
export const selectOpenWeatherData = state => state.weather.weatherData;
export const selectOpenWeatherStatus = state => state.weather.weatherStatus;
export const selectOpenCurrentWeather = state => state.weather.currentWeather;

// export the reducer as default
export default OpenWeatherSlice.reducer;