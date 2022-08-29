import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot, selectSearchTerm, setCurrentSpot } from "../../SpotSelector/SpotSlice";


export const SpotSearchResult = () => {
    const dispatch = useDispatch();
    const spotResult = useSelector(selectCurrentSpot);
    const searchTerm = useSelector(selectSearchTerm);

    const handleClick = (city) =>{
        // dispatch(setSearchTerm(`${city.name}, ${city.country}`));
        dispatch(setCurrentSpot(city));
        const title = document.getElementsByTagName('h1')[0];
        title.scrollIntoView({behavior: 'smooth'});
    }

    if (spotResult.geoStatus !== 'succeeded' || !spotResult.data) {
        return (
            <ul>
                {/* <p>GeoLocation not loaded: {spotResult.geoStatus}</p> */}
            </ul>
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
        <ul className="SpotSearchResult">
            {resultList}
        </ul>
    )
    }
}

