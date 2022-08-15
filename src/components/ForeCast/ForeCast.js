import React from "react";
import { SpotGeoDisplay } from "../SpotLoader/SpotGeoDisplay/SpotGeoDisplay";
import { ForeCastResult } from "../forecastResult/ForeCastResult";
import { TideResult } from "../TidesResult/TideResult";
import { WindResult } from "../WindResult/WindResult";
import { WeatherResult } from "../WeatherResult/WeatherResult";
import { GetWeather } from "../../features/OpenWeather/GetWeather";
import { selectCurrentSpot, selectSearchTerm } from "../../components/SpotSelector/SpotSlice";
import { useSelector } from "react-redux";


export const ForeCast = ()=>{
    const currentSpot = useSelector(selectCurrentSpot);
    const searchTerm = useSelector(selectSearchTerm);

    if (currentSpot.geoStatus !== 'succeeded' || !currentSpot.data) {
        return (
            <>
                <p>GeoLocation not loaded: {currentSpot.geoStatus}</p>
            </>
        )
        
    } else if (currentSpot.data.length <1) {
        return (
            <>
                <p>No spot found for '{searchTerm}'</p>
            </>
        )
    }
    else {

    return (
        <div className="ForeCast">
            <SpotGeoDisplay />
            <GetWeather />
            <ForeCastResult />
            <TideResult />
            <WindResult />
            <WeatherResult />
        </div>
    )
    }
    }
