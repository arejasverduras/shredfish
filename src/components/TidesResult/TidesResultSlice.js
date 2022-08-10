import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Surfline from "../../features/ForeCastData/Surfline";


    export const getTidesData = createAsyncThunk('/tides',
    async (arg, thunkAPI) => {
        const response = await Surfline.getDataFromAPI(arg);
        return response.data
    })

const tidesSlice = createSlice({
    name: "tides",
    initialState: {
        tidesdata: '',
        tidesstatus: 'yyy'
    },
    reducers: {

    },
    extraReducers: {
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
export const selectTidesData = state => state.tides.tidesdata;
export const selectTidesStatus = state => state.tides.tidesstatus;

// export the reducer as default
export default tidesSlice.reducer;