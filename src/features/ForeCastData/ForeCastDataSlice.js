import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Surfline from "./Surfline";



export const getWaveData = createAsyncThunk('/',
    async (arg, thunkAPI) => {
        const response = await Surfline.getWaveData(arg);
        return response.data
    })

    export const getTidesData = createAsyncThunk('/tides',
    async (arg, thunkAPI) => {
        const response = await Surfline.getTideData(arg);
        return response.data
    })

const foreCastSlice = createSlice({
    name: "forecast",
    initialState: {
        spotdata: ['xxx'],
        status: 'idle',
        winddata: [],
        tidesdata: [],
        tidesstatus: 'yyy'
    },
    reducers: {

    },
    extraReducers: {
        [getWaveData.pending]: (state,action) => {
            state.status = 'loading';
            
        },
        [getWaveData.fulfilled]: (state,action) => {
            state.status = 'succeeded';
            state.spotdata = (action.payload)
            // for analyzing of the response object
            console.log(state.spotdata.wave)
        },
        [getWaveData.rejected]: (state, action) => {
            state.status = 'rejected';
            state.spotdata = 'flat as a pancake';
        },
        [getTidesData.pending]: (state,action) => {
            state.tidesstatus = 'loading';
            
        },
        [getTidesData.fulfilled]: (state,action) => {
            state.tidesstatus = 'succeeded';
            state.tidesdata = (action.payload)
            // for analyzing of the response object
            console.log(state.tidesdata)
        },
        [getTidesData.rejected]: (state, action) => {
            state.tidesstatus = 'rejected';
            state.tidesdata = 'the moon has left us';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectForeCast = state => state.forecast.spotdata;
export const selectStatus = state => state.forecast.status;

// export the reducer as default
export default foreCastSlice.reducer;