import React from "react";
import { SpotGeoDisplay } from "../SpotLoader/SpotGeoDisplay/SpotGeoDisplay";
import { CallAPIs } from "../../features/CallAPIs/CallAPIs";
import { Current } from "../Current/Current";
import { ForeCastTableStormGlass } from "./ForeCastTableStormGlass/ForeCastTableStormGlass";

import { Tides } from "../Tides/Tides";
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
            <SpotGeoDisplay />
            <CallAPIs />
            {/* make this into a mini component? */}
                <div className='ForeCastNameAndStatus'>
                    <h1>{currentSpot.data[0].name}</h1>
                </div>
            <Current />
            <WeeklyCast />
            <ForeCastTableStormGlass />
            <Tides />

                {/* Weather is Integrated in Current, and will be integrated in ForecastTable */}
        </div>
    )
    }
    }
