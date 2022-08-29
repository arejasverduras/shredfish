import {React, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "../SpotSelector/SpotSlice";

export const SpotLoader = () => {
    // should : return an input field for a location name
    //should: set the currentSearchTerm state
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const [term, setTerm] = useState();

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(term));
    }
    
    return (
        <div className="SpotLoader">
            <h2>Find Spot</h2>
            <form onSubmit={handleSubmit} >
                <input 
                    onChange={handleChange} 
                    value={term}
                    placeholder="Search spot">
                    
                </input>
                <button type="submit">Search</button>
            </form> 
        </div>
    )
}