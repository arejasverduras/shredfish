import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StormGlass from "../../features/ForeCastData/StormGlass/StormGlass";
import Surfline from "../../features/ForeCastData/Surfline";


    export const getTidesData = createAsyncThunk('/tides/surfline',
    async (arg, thunkAPI) => {
        const response = await Surfline.getDataFromAPI(arg);
        return response.data
    })

    export const getTidesFromStormGlass = createAsyncThunk('/tides/stormglass',
    async (arg, thunkAPI) => {
        const response = await StormGlass.getTides(arg);
        return response;
    })


const tidesSlice = createSlice({
    name: "tides",
    initialState: {
        tidesdata: '',
        tidesstatus: 'idle',
        tidesDataSG: '',
        tidesStatusSG: 'idle'
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
        },
        [getTidesData.rejected]: (state, action) => {
            state.tidesstatus = 'rejected';
            state.tidesdata = 'the moon has left us';
        },

        [getTidesFromStormGlass.pending]: (state,action) => {
            state.tidesStatusSG = 'loading';
            
        },
        [getTidesFromStormGlass.fulfilled]: (state,action) => {
            state.tidesStatusSG = 'succeeded';
            state.tidesDataSG = (action.payload)
 
        },
        [getTidesFromStormGlass.rejected]: (state, action) => {
            state.tidesStatusSG = 'rejected';
            state.tidesDataSG = 'the sg moon has left us';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectTidesData = state => state.tides.tidesdata;
export const selectTidesStatus = state => state.tides.tidesstatus;
export const selectTidesStatusSG = state =>state.tides.tidesStatusSG;
export const selectTidesDataSG = state => state.tides.tidesDataSG;

// export the reducer as default
export default tidesSlice.reducer;