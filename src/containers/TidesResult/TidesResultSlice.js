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

    export const getTidesExtremes = createAsyncThunk('/tides/stormglass/extremes',
    async (arg, thunkAPI) => {
        const response = await StormGlass.getTidesExtremes(arg);
        return response;
    })


const tidesSlice = createSlice({
    name: "tides",
    initialState: {
        tidesdata: '',
        tidesstatus: 'idle',
        tidesDataSG: '',
        tidesStatusSG: 'idle',
        tidesExtremesData: '',
        tidesExtremesStatus: 'idle'
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

        //get TidesFromStormGlass
        [getTidesFromStormGlass.pending]: (state,action) => {
            state.tidesStatusSG = 'loading';
            
        },
        [getTidesFromStormGlass.fulfilled]: (state,action) => {
            if (action.payload === '402') {
                state.tidesStatusSG = 'API request max reached';
                state.tidesDataSG = ('no money g')
            } else {
            state.tidesStatusSG = 'succeeded';
            state.tidesDataSG = (action.payload)
            }
 
        },
        [getTidesFromStormGlass.rejected]: (state, action) => {
            state.tidesStatusSG = 'rejected';
            state.tidesDataSG = 'the sg moon has left us';
        },

        //getTidesExtremes
        [getTidesExtremes.pending]: (state,action) => {
            state.tidesExtremesStatus = 'loading';
            
        },
        [getTidesExtremes.fulfilled]: (state,action) => {
            if (action.payload === '402') {
                state.tidesExtremesStatus = 'API request max reached';
                state.tidesExtremesData = ('no money g')
            } else {

            state.tidesExtremesStatus = 'succeeded';
            state.tidesExtremesData = (action.payload)
            }
        },
        [getTidesExtremes.rejected]: (state, action) => {
            state.tidesExtremesStatus = 'rejected';
            state.tidesExtremesData = 'the sg moon has left us';
        }
    }
})

// export slice actions

//create and export sliceSelector 
export const selectTidesData = state => state.tides.tidesdata;
export const selectTidesStatus = state => state.tides.tidesstatus;

export const selectTidesStatusSG = state =>state.tides.tidesStatusSG;
export const selectTidesDataSG = state => state.tides.tidesDataSG;

export const selectTidesExtremeStatus = state =>state.tides.tidesExtremesStatus;
export const selectTidesExtremeData = state => state.tides.tidesExtremesData;

// export the reducer as default
export default tidesSlice.reducer;