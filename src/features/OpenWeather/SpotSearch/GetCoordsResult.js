import {React} from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot, selectSearchTerm } from "../../../components/SpotSelector/SpotSlice";
import { GetWeather } from "../GetWeather";

export const GetCoordinatesResult = () => {
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
    
    const {data} = currentSpot;
    const {name, lat, lon} = data[0];

    return (
        <>
            <p>{name}, {lat}, {lon}</p>
            <GetWeather />
        </>
    )
    }
}