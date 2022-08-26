import React from "react";
import { SpotHeader } from "../SpotSelector/SpotHeader/SpotHeader";
import { SpotGeoDisplay } from "../SpotLoader/SpotGeoDisplay/SpotGeoDisplay";
import { CallAPIs } from "../../features/CallAPIs/CallAPIs";
import { Current } from "../Current/Current";

import { selectCurrentSpot, selectSearchTerm } from "../../components/SpotSelector/SpotSlice";
import { useSelector } from "react-redux";
import { WeeklyCast } from "./WeeklyCast/WeeklyCast";


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
            <CallAPIs />
            <SpotHeader />
            <SpotGeoDisplay />
            <Current />
            <WeeklyCast />

                {/* Weather is Integrated in Current, and will be integrated in ForecastTable */}
        </div>
    )
    }
    }
