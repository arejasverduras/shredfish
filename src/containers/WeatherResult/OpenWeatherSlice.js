import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import GeoCoding from "../../features/OpenWeather/GeoCoding";

export const getOpenWeatherData = createAsyncThunk('/openweather/weatherinfo',
async (arg, thunkAPI) => {
    const response = await GeoCoding.getWeatherFromGeo(arg);
    return response;
})

export const getAllOpenWeatherData = createAsyncThunk('/openweather/allweatherinfo',
async (arg, thunkAPI) => {
    const response = await GeoCoding.getAllWeatherFromGeo(arg);
    return response;
})

const OpenWeatherSlice = createSlice({
    name: 'openweather',
    initialState: {
        currentWeatherStatus: 'idle',
        currentWeather: '',
        openWeatherStatus: 'idle',
        openWeatherData: ''
        
    },
    extraReducers: {
        // gets currentWeather from openWeather
        [getOpenWeatherData.pending]: (state,action) => {
            state.currentWeatherStatus = 'pending';
            
        },
        [getOpenWeatherData.fulfilled]: (state, action) => {
            state.currentWeatherStatus = 'succeeded';
            state.currentWeather = (action.payload);
        },
        [getOpenWeatherData.rejected]: (state, action) => {
            state.currentWeatherStatus = 'rejected';
            state.currentWeather = 'The sun rose in the east';
        },
        //gets all weather date (onecall) from openWeather
        [getAllOpenWeatherData.pending]: (state,action) => {
            state.openWeatherStatus = 'pending';
            
        },
        [getAllOpenWeatherData.fulfilled]: (state, action) => {
            state.openWeatherStatus = 'succeeded';
            state.openWeatherData = (action.payload);
        },
        [getAllOpenWeatherData.rejected]: (state, action) => {
            state.openWeatherStatus = 'rejected';
            state.openWeatherData = 'The sun rose in the east';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectOpenWeatherData = state => state.openweather.openWeatherData;
export const selectOpenWeatherStatus = state => state.openweather.openWeatherStatus;
export const selectCurrentWeatherStatus = state => state.openweather.currentWeatherStatus;
export const selectOpenCurrentWeather = state => state.openweather.currentWeather;

// export the reducer as default
export default OpenWeatherSlice.reducer;