import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSpot } from "../../../components/SpotSelector/SpotSlice";

export const GetCoordinatesResult = () => {
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

    if (currentSpot.geoStatus !== 'succeeded' || !currentSpot.data) {
        return (
            <>
                <p>GeoLocation not loaded: {currentSpot.geoStatus}</p>
            </>
        )
        
    } else {
    
    const {data} = currentSpot;
    const {name, lat, lon} = data[0];

    return (
        <>
            <p>{name}, {lat}, {lon}</p>
        </>
    )
    }
}