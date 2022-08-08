import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Surfline from "../../features/ForeCastData/Surfline";

    export const getSpotInfo = createAsyncThunk('/spot/spotinfo',
    async (arg, thunkAPI) => {
        const response = await Surfline.loadSpotInfo(arg);
        return response.data;
    })

const spotSlice = createSlice({
    name: "spot",
    initialState: {
        spotName: ['Scheveningen Nord'],
        spotKey: '584204204e65fad6a77095f0',
        spotStatus: 'idle'
    },
    reducers: {

    },
    extraReducers: {
        [getSpotInfo.pending]: (state,action) => {
            state.spotStatus = 'loading';
            
        },
        [getSpotInfo.fulfilled]: (state,action) => {
            state.spotStatus = 'succeeded';
            state.spotKey = (action.payload)
            // for analyzing of the response object
            // console.log(state.spotKey.wave)
        },
        [getSpotInfo.rejected]: (state, action) => {
            state.spotStatus = 'rejected';
            state.spotKey = 'lost the keys mate';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectSpotName = state => state.spot.spotName;
export const selectSpotKey = state => state.spot.spotKey;
export const selectSpotStatus = state => state.spot.spotStatus;

// export the reducer as default
export default spotSlice.reducer;