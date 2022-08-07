import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Surfline from "./Surfline";



export const getSpotData = createAsyncThunk('/',
    async (arg, thunkAPI) => {
        const response = await Surfline.getWaveData(arg);
        return response.data
    })

// const type = 'wave';
// const spotId = '584204204e65fad6a77095f0';
// const params = `spotId=${spotId}`;

const foreCastSlice = createSlice({
    name: "forecast",
    initialState: {
        spotdata: ['xxx'],
        winddata: [],
        tidedata: [],
        status: 'idle'
    },
    reducers: {

    },
    extraReducers: {
        [getSpotData.pending]: (state,action) => {
            state.status = 'loading';
            
        },
        [getSpotData.fulfilled]: (state,action) => {
            state.status = 'succeeded';
            state.spotdata = (action.payload)
            // for analyzing of the response object
            console.log(state.spotdata.wave)
        },
        [getSpotData.rejected]: (state, action) => {
            state.status = 'rejected';
            state.spotdata = 'flat as a pancake';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectForeCast = state => state.forecast.spotdata;
export const selectStatus = state => state.forecast.status;

// export the reducer as default
export default foreCastSlice.reducer;