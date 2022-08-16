import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import GeoCoding from "../../features/OpenWeather/GeoCoding";

export const getOpenWeatherData = createAsyncThunk('/openweather/weatherinfo',
async (arg, thunkAPI) => {
    const response = await GeoCoding.getWeatherFromGeo(arg);
    return response;
})

const OpenWeatherSlice = createSlice({
    name: 'openweather',
    initialState: {
        openWeatherStatus: 'idle',
        openWeatherData: '',
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
            state.openWeatherStatus = 'pending';
            
        },
        [getOpenWeatherData.fulfilled]: (state, action) => {
            state.openWeatherStatus = 'succeeded';
            state.openWeatherData = (action.payload);
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
export const selectOpenWeatherData = state => state.openweather.openWeatherData;
export const selectOpenWeatherStatus = state => state.openweather.openWeatherStatus;
export const selectOpenCurrentWeather = state => state.openweather.CurrentWeather;

// export the reducer as default
export default OpenWeatherSlice.reducer;