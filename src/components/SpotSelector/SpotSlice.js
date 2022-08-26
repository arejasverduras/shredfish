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
        searchTerm: 'Den Haag',
        currentSpot: {
            geoStatus: 'idle',
            data: {},
            timezoneDifference: 2
        },
        spotName: 'Scheveningen',
        spotKey: '584204204e65fad6a77095f0',
        spotStatus: 'idle',
        favoriteSpots: [{
            name: 'Scheveningen',
        },{
            name: 'Ter Heijde',
            key: '584204204e65fad6a77095f3'
        },{
            name: 'Hoek van Holland',
            key: '584204204e65fad6a77095f2'
        },
        {
            name: 'Sopelana',
            key: '5842041f4e65fad6a7708e75'
        },
        {
            name: 'Pupukea',
            key: '5842041f4e65fad6a7708890'
        }
    ]
    },
    reducers: {
        setSearchTerm: (state, action ) => {
            state.searchTerm = action.payload;
        }, 
        setCurrentSpot: (state, action) => {
            state.currentSpot.data = action.payload;
        }
        ,setSpotInfo: (state, action) => {
            state.spotKey = action.payload.key;
            state.spotName = action.payload.name;
        },
        addFavoriteSpot: (state, action) => {
            // to be written
            const spotfound = state.favoriteSpots.find(spot => spot.name === action.payload.name);
            if (spotfound !== undefined) {
                console.log('spot already in favorites')
            } else {
            state.favoriteSpots.push(action.payload);
            }
        },
        removeFavoriteSpot: (state, action) => {
            //to be written
            state.favoriteSpots = state.favoriteSpots.filter(spot => 
                spot.name !== action.payload)
        }
    },
    extraReducers: {
        [getSpotInfo.pending]: (state,action) => {
            state.spotStatus = 'loading';
            
        },
        [getSpotInfo.fulfilled]: (state,action) => {
            state.spotStatus = 'succeeded';
            state.spotKey = (action.payload)
            // for analyzing of the response object
            // console.log(state.spotKey.wave)
        },
        [getSpotInfo.rejected]: (state, action) => {
            state.spotStatus = 'Rejected';
            state.spotKey = 'lost the keys mate';
        },
        [getGeoLocation.pending]: (state,action) => {
            state.currentSpot.geoStatus = 'loading';
            
        },
        [getGeoLocation.fulfilled]: (state,action) => {
            state.currentSpot.geoStatus = 'succeeded';
            state.currentSpot.data = (action.payload);
            // for analyzing of the response object
            // console.log(state.spotKey.wave)
        },
        [getGeoLocation.rejected]: (state, action) => {
            state.currentSpot.geoStatus = 'rejected';
            state.currentSpot.data = {}
        }

    }
})

// export slice actions
export const {setSearchTerm, setSpotInfo, addFavoriteSpot, removeFavoriteSpot} = spotSlice.actions;

//create and export sliceSelector 
export const selectSpotName = state => state.spot.spotName;
export const selectSpotKey = state => state.spot.spotKey;
export const selectSpotStatus = state => state.spot.spotStatus;
export const selectFavoriteSpots = state => state.spot.favoriteSpots;
export const selectCurrentSpot = state => state.spot.currentSpot;
export const selectTimezoneDifference = state => state.spot.currentSpot.timezoneDifference;
export const selectSearchTerm = state => state.spot.searchTerm;

// export the reducer as default
export default spotSlice.reducer;