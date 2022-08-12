import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../SpotSelector/SpotSlice";

export const SpotLoader = () => {
    // should : return an input field for a location name
    //should: set the currentSearchTerm state
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm)
    
    return (
        <>
         <input onChange={dispatch(setSearchTerm())} value={searchTerm}></input>
        </>
    )
}