import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Surfline from "../../features/ForeCastData/Surfline";
import GeoCoding from "../../features/OpenWeather/GeoCoding";

    export const getSpotInfo = createAsyncThunk('/spot/spotinfo',
    async (arg, thunkAPI) => {
        const response = await Surfline.loadSpotInfo(arg);
        return response.data;
    })

    export const getGeoLocation = createAsyncThunk('spot/spotGeo',
    async (arg, thunkAPI) => {
        const response = await GeoCoding.getGeoCords(arg);
        return response;
    })

const spotSlice = createSlice({
    name: "spot",
    initialState: {
        searchTerm: '',
        searchResults: {
            status: 'idle',
            data: {}
        },
        currentSpot: {
            geoStatus: 'idle',
            data: {},
            timezoneDifference: 1
        },
        // spotName: 'Scheveningen',
        // spotKey: '584204204e65fad6a77095f0',
        spotStatus: 'idle',
        favoriteSpots: [{
            name: 'Scheveningen',
            state: 'South Holland',
            country: 'NL',
            lat: '52.1067449',
            lon: '4.2736937'
        },{
            name: 'Ter Heijde',
            state: 'South Holland',
            country: 'NL',
            lat: '52.0300423',
            lon: '4.167942'
        },{
            name: 'Hook of Holland',
            state: 'South Holland',
            country: 'NL',
            lat: '51.9771615',
            lon: '4.1314526'
        },
        // {
        //     name: 'Saint-Lunaire',
        //     state: 'Brittany',
        //     country: 'FR',
        //     lat: '48.6354993',
        //     lon: '-2.1090269'
        // },
    ]
    },
    reducers: {
        setSearchTerm: (state, action ) => {
            state.searchTerm = action.payload;
        }, 
        setCurrentSpot: (state, action) => {
            state.currentSpot.data[0] = action.payload;
            state.currentSpot.geoStatus = 'succeeded';
        }
        ,setSpotInfo: (state, action) => {
            state.spotKey = action.payload.key;
            state.spotName = action.payload.name;
        },
        addFavoriteSpot: (state, action) => {
            state.favoriteSpots.push(action.payload);

        },
        removeFavoriteSpot: (state, action) => {
            state.favoriteSpots = state.favoriteSpots.filter(spot => 
                `${spot.name}, ${spot.state}, ${spot.country}` !== `${action.payload.name}, ${action.payload.state}, ${action.payload.country}`);
        }
    },
    extraReducers: {
        [getSpotInfo.pending]: (state,action) => {
            state.spotStatus = 'loading';   
        },
        [getSpotInfo.fulfilled]: (state,action) => {
            state.spotStatus = 'succeeded';
            state.spotKey = (action.payload)
        },
        [getSpotInfo.rejected]: (state, action) => {
            state.spotStatus = 'Rejected';
            state.spotKey = 'lost the keys mate';
        },
        [getGeoLocation.pending]: (state,action) => {
            state.currentSpot.geoStatus = 'loading';
            
        },
        [getGeoLocation.fulfilled]: (state,action) => {
            state.searchResults.status = 'succeeded';
            state.searchResults.data = (action.payload);
        },
        [getGeoLocation.rejected]: (state, action) => {
            state.currentSpot.geoStatus = 'rejected';
            state.currentSpot.data = {}
        }

    }
})

// export slice actions
export const {setSearchTerm, setSpotInfo, setCurrentSpot, addFavoriteSpot, removeFavoriteSpot} = spotSlice.actions;

//create and export sliceSelector 
export const selectSpotName = state => state.spot.spotName;
export const selectSpotKey = state => state.spot.spotKey;
export const selectSpotStatus = state => state.spot.spotStatus;
export const selectFavoriteSpots = state => state.spot.favoriteSpots;
export const selectCurrentSpot = state => state.spot.currentSpot;
export const selectTimezoneDifference = state => state.spot.currentSpot.timezoneDifference;
export const selectSearchTerm = state => state.spot.searchTerm;

export const selectSearchResults = state => state.spot.searchResults; 

// export the reducer as default
export default spotSlice.reducer;