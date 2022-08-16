import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import StormGlass from "../../features/ForeCastData/StormGlass/StormGlass";

export const getSwell = createAsyncThunk('/storm/getSwell',
async (arg, thunkAPI) => {
    const response = await StormGlass.getSwell(arg);
    return response;
});

const StormSlice = createSlice({
    name: 'storm',
    initialState: {
        stormStatus: 'idle',
        stormData: '',
        
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
            state.stormStatus = 'rejected';
            state.stormData = 'The sun rose in the east';
        }
    }
})

// export slice actions

// create & export selectors
export const selectStormStatus = state => state.storm.stormStatus;
export const selectStormData = state => state.storm.stormData;

// export the reducer as default
export default StormSlice.reducer;
