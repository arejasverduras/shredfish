import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteSpots, selectSpotName, setSpotInfo } from './SpotSlice';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const spotName = useSelector(selectSpotName);
    const favoriteSpots = useSelector(selectFavoriteSpots);

    const spotButtons = favoriteSpots.map((spot, index)=> 
        <button onClick={()=>{dispatch(setSpotInfo(spot))}}>{spot.name}</button>
    )
    
    return (
        <div className="SpotSelector">
        <h1>Select Spot</h1>
                <div className="spotButtons">
                    {spotButtons}
                </div>
                
        </div>
    )
}