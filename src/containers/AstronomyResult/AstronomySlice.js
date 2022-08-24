import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import StormGlass from "../../features/ForeCastData/StormGlass/StormGlass";

export const getAstronomy = createAsyncThunk('/astronomy',
async (arg, thunkAPI) => {
    const response = await StormGlass.getAstronomy(arg);
    return response;
});

const astronomySlice = createSlice({
    name: 'astronomy',
    initialState: {
        astronomyStatus: 'idle',
        astronomyData: {
            
        }
    },
    reducers: {

    },
    extraReducers: {
        [getAstronomy.pending]: (state,action) => {
            state.astronomyStatus = 'loading';
        },
        [getAstronomy.fulfilled]: (state,action) => {
            state.astronomyStatus = 'succeeded';
            state.astronomyData = (action.payload);
        },
        [getAstronomy.rejected]: (state,action) =>{
            state.astronomyStatus = 'rejected';
        }
    }
})

// export slice actions

//create and export sliceSelectors
export const selectAstronomyStatus = state => state.astronomy.astronomyStatus;
export const selectAstronomyData = state => state.astronomy.astronomyData;

// export the reducer as default
export default astronomySlice.reducer;