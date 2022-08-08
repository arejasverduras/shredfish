import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Surfline from "../../features/ForeCastData/Surfline";


    export const getWindData = createAsyncThunk('/tides',
    async (arg, thunkAPI) => {
        const response = await Surfline.getWindData(arg);
        return response.data
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
            state.windstatus = 'succeeded';
            state.winddata = (action.payload)
            // for analyzing of the response object
            console.log(state.winddata)
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