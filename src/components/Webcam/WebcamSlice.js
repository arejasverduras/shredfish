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
                url: '4wtss9PfYw8'
            },
            {
                name: 'Aloha Noord',
                city: 'Scheveningen',
                state: 'South Holland',
                country: 'NL',
                lat: '52.1067449',
                lon: '4.2736937',
                type: 'YouTube',
                url: 'EHKOx5QJEj4'
            },
            {
                name: 'Boulevard Hotel',
                city: 'Scheveningen',
                state: 'South Holland',
                country: 'NL',
                lat: '52.1067449',
                lon: '4.2736937',
                type: 'YouTube',
                url: 'A5kXiKzbBFs'
            },
            {
                name: 'Aloha Noord+Zuid',
                city: 'Scheveningen',
                state: 'South Holland',
                country: 'NL',
                lat: '52.1067449',
                lon: '4.2736937',
                type: 'YouTube',
                url: 'rrfs742wy4c'
            },
            {
                name: 'Carlton Beach',
                city: 'Scheveningen',
                state: 'South Holland',
                country: 'NL',
                lat: '52.1067449',
                lon: '4.2736937',
                type: 'YouTube',
                url: 'DaG5JReOYEw'
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