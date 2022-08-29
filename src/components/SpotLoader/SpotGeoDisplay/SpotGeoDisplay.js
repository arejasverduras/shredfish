import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot, selectSearchTerm } from "../../SpotSelector/SpotSlice";

export const SpotGeoDisplay = () => {
    const currentSpot = useSelector(selectCurrentSpot);
    const searchTerm = useSelector(selectSearchTerm);

    
    if (currentSpot.geoStatus === 'rejected') {
        return (
            <p>No result. Try searching again.</p>
        )
    }
    
    else if (currentSpot.geoStatus !== 'succeeded' || !currentSpot.data) {
        return (
            <>
                <p>GeoLocation noot loaded: {currentSpot.geoStatus}</p>
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

    const {data} = currentSpot;
    const {lat, lon} = data[0];
    
    return (
        <div className="SpotGeoDisplay">
            <p>{lat}, {lon}</p>
        </div>
    )
    }
}
