import React from "react";
import { SpotGeoDisplay } from "../SpotLoader/SpotGeoDisplay/SpotGeoDisplay";
import { CallAPIs } from "../../features/CallAPIs/CallAPIs";
import { Current } from "../Current/Current";
import { ForeCastTable } from "../forecastResult/ForeCastTable/ForeCastTable";
import { Tides } from "../Tides/Tides";
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
            <CallAPIs />
            
            {/* Renders Current */}
            <Current />
            <ForeCastTable />
            <Tides />
                {/* Wind is displayed in Forecast table and CurrentWind, 
                no need to render anyhthing */}
                {/* Weather is Integrated in Current, and will be integrated in ForecastTable */}
        </div>
    )
    }
    }
