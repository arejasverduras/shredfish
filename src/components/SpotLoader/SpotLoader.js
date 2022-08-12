import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCoordinates } from "../../features/OpenWeather/SpotSearch/getCoordinates";
import { setSearchTerm, selectSearchTerm } from "../SpotSelector/SpotSlice";

export const SpotLoader = () => {
    // should : return an input field for a location name
    //should: set the currentSearchTerm state
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm)

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }
    
    return (
        <>
        <h2>Find Spot Coordinates</h2>
         <input onChange={handleChange} value={searchTerm}></input>
         <GetCoordinates term={searchTerm} />
        </>
    )
}