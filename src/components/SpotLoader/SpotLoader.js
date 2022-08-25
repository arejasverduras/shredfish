import {React} from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <div className="SpotLoader">
            <h2>Find Spot</h2>
            <input onChange={handleChange} value={searchTerm}></input>
        </div>
    )
}