import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSearchTerm, setCurrentSpot } from "../../SpotSelector/SpotSlice";
import { selectSearchResults } from "../../SpotSelector/SpotSlice";


export const SpotSearchResult = () => {
    const dispatch = useDispatch();
    const searchResult = useSelector(selectSearchResults);

    const searchTerm = useSelector(selectSearchTerm);

    const handleClick = (city) =>{
        dispatch(setCurrentSpot(city));
    }

    if (searchResult.status !== 'succeeded' || !searchResult.data ) {
        return (
            <ul>
                {/* <p>GeoLocation not loaded: {spotResult.geoStatus}</p> */}
            </ul>
        )
        
    } else if (searchResult.data.length <1) {
        return (
            <>
                <p>No spot found for '{searchTerm}'</p>
            </>
        )
    } else {

    const resultList = searchResult.data.map((city, index) => 
        <li key={index} onClick={()=>{handleClick(city)}} value={city.name}>{city.name}, {city.state}, {city.country}</li>
    )
    
    return (
        <ul className="SpotSearchResult">
            {resultList}
        </ul>
    )
    }
}

