import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import StormGlass from "../../features/ForeCastData/StormGlass/StormGlass";

export const getSwell = createAsyncThunk('/storm/getSwell',
async (arg, thunkAPI) => {
    const response = await StormGlass.getSwell(arg);
    return response;
});

export const getSecondarySwell = createAsyncThunk('/storm/getSecondarySwell',
async (arg, thunkAPI) => {
    const response = await StormGlass.getSecondarySwell(arg);
    return response;
});

const StormSlice = createSlice({
    name: 'storm',
    initialState: {
        stormStatus: 'idle',
        stormData: '',
        secondarySwellStatus: 'idle',
        secondarySwellData: ''
        
    },
    extraReducers: {
        [getSwell.pending]: (state,action) => {
            state.stormStatus = 'pending';
            
        },
        [getSwell.fulfilled]: (state, action) => {
            state.stormStatus = 'succeeded';
            state.stormData = (action.payload);
        },
        [getSwell.rejected]: (state, action) => {
            state.stormStatus = `Rejected: The sun rose in the east. `;
            // state.stormData = 'The sun rose in the east';
        },

        [getSecondarySwell.pending]: (state,action) => {
            state.secondarySwellStatus = 'pending';
            
        },
        [getSecondarySwell.fulfilled]: (state, action) => {

            state.secondarySwellStatus = 'succeeded';
            state.secondarySwellData = (action.payload);
            
        },
        [getSecondarySwell.rejected]: (state, action) => {
            state.secondarySwellStatus = 'rejected';
            state.secondarySwellData = 'The sun rose in the east';
        }
    }
})

// export slice actions

// create & export selectors
export const selectStormStatus = state => state.storm.stormStatus;
export const selectStormData = state => state.storm.stormData;
export const selectSecondarySwellStatus = state => state.storm.secondarySwellStatus;
export const selectSecondarySwellData = state => state.storm.secondarySwellData;

// export the reducer as default
export default StormSlice.reducer;
