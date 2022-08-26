import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot, selectSearchTerm, setSearchTerm } from "../../SpotSelector/SpotSlice";


export const SpotSearchResult = () => {
    const dispatch = useDispatch();
    const spotResult = useSelector(selectCurrentSpot);
    const searchTerm = useSelector(selectSearchTerm);

    const handleClick = ({name, state, country}) =>{
        dispatch(setSearchTerm(`${name}, ${state}, ${country}`));
        console.log(name, state, country)
    }

    if (spotResult.geoStatus !== 'succeeded' || !spotResult.data) {
        return (
            <>
                <p>GeoLocation not loaded: {spotResult.geoStatus}</p>
            </>
        )
        
    } else if (spotResult.data.length <1) {
        return (
            <>
                <p>No spot found for '{searchTerm}'</p>
            </>
        )
    } else {

    const resultList = spotResult.data.map((city, index) => 
        <li key={index} onClick={()=>{handleClick(city)}} value={city.name}>{city.name}, {city.state}, {city.country}</li>
    )
    
    return (
        <div className="SpotSearchResult">
            {resultList}
        
        </div>
    )
    }
}

