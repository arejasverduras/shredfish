import {React, useState} from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm} from "../SpotSelector/SpotSlice";

export const SpotLoader = () => {
    // should : return an input field for a location name
    //should: set the currentSearchTerm state
    const dispatch = useDispatch();

    const [term, setTerm] = useState('Scheveningen');

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
                    placeholder="Find a location">
                </input>
                <button type="submit">Search</button>
            </form> 
        </div>
    )
}