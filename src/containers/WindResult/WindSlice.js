import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import Surfline from "../../features/ForeCastData/Surfline";
import StormGlass from "../../features/ForeCastData/StormGlass/StormGlass";

    export const getWindData = createAsyncThunk('/wind/StormGlass',
    async (arg, thunkAPI) => {
        // const response = await Surfline.getDataFromAPI(arg);
        const response = await StormGlass.getWind(arg);
        return response
    })

const WindSlice = createSlice({
    name: "wind",
    initialState: {
        winddata: '',
        windstatus: 'www'
    },
    reducers: {

    },
    extraReducers: {
        [getWindData.pending]: (state,action) => {
            state.windstatus = 'loading';
            
        },
        [getWindData.fulfilled]: (state,action) => {
            if (action.payload === '402') {
                state.windstatus = 'rejected';
                state.winddata = ('no money g')
            } else {
            state.windstatus = 'succeeded';
            state.winddata = (action.payload);
            }
        },
        [getWindData.rejected]: (state, action) => {
            state.windstatus = 'rejected';
            state.winddata = 'Not a single breeze';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectWindData = state => state.wind.winddata;
export const selectWindStatus = state => state.wind.windstatus;

// export the reducer as default
export default WindSlice.reducer;