import { createSlice } from "@reduxjs/toolkit";

const foreCastSlice = createSlice({
    name: "forecast",
    initialState: {
        spotdata: [{}]
    },
    reducers: {

    }
})

// export slice actions

//create and export sliceSelector 
export const selectForeCast = state => state.forecast.spotdata;

// export the reducer as default
export default foreCastSlice.reducer;