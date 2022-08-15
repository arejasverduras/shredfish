import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../../SpotSelector/SpotSlice";

export const SpotGeoDisplay = () => {
    const currentSpot = useSelector(selectCurrentSpot);

    const {data} = currentSpot;
    const {name, lat, lon} = data[0];
    
    return (
        <div className="SpotGeoDisplay">
            <p>{name}, {lat}, {lon}</p>
        </div>
    )
}
