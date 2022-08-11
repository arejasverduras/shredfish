import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Surfline from "../../features/ForeCastData/Surfline";

export const getWeatherData = createAsyncThunk('/weather/weatherinfo',
async (arg, thunkAPI) => {
    const response = await Surfline.getDataFromAPI(arg);
    return response.data;
})

const WeatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weatherStatus: 'idle',
        weatherData: {
            sunlightTimes: [],
            weather: []
        },
        currentWeather: {
            temp: '-10',
            condition: 'No se tio'            
        }
    },
    reducers: {
        setCurrentWeather: (state, action) => {
            state.currentWeather.temp = action.payload.temp;
            state.currentWeather.condition = action.payload.condition;
        }
    },
    extraReducers: {
        [getWeatherData.pending]: (state,action) => {
            state.weatherStatus = 'loading';
            
        },
        [getWeatherData.fulfilled]: (state,action) => {
            state.weatherStatus = 'succeeded';
            state.weatherData = (action.payload)
            // for analyzing of the response object
            console.log(state.weatherData)
        },
        [getWeatherData.rejected]: (state, action) => {
            state.weatherStatus = 'rejected';
            state.weatherData = 'The sun rose in the east';
        }
    }
})

// export slice actions
export const {setCurrentWeather} = WeatherSlice.actions;

//create and export sliceSelector 
export const selectWeatherData = state => state.weather.weatherData;
export const selectWeatherStatus = state => state.weather.weatherStatus;
export const selectCurrentWeather = state => state.weather.currentWeather;

// export the reducer as default
export default WeatherSlice.reducer;