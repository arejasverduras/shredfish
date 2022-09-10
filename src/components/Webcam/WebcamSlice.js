import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const WebcamSlice = createSlice({
    name: 'webcam',
    initialState: {
        webcamSpots: [
            {
                name: 'Hart Beach',
                city: 'Scheveningen',
                state: 'South Holland',
                country: 'NL',
                lat: '52.1067449',
                lon: '4.2736937',
                type: 'YouTube',
                url: 'KtqXsU-e9zc'
            },
            {
                name: 'Aloha',
                city: 'Scheveningen',
                state: 'South Holland',
                country: 'NL',
                lat: '52.1067449',
                lon: '4.2736937',
                type: 'YouTube',
                url: 'rrfs742wy4c'
            }
        ]
    },
    reducers: {

    },
    extraReducers: {}
    
})

// export slice actions

//create and export sliceSelectors
export const selectWebcamSpots = state => state.webcam.webcamSpots;

// export the reducer as default
export default WebcamSlice.reducer;