import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteSpots, setSearchTerm, setSpotInfo } from './SpotSlice';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);

    const handleClick = (spot) => {
        dispatch(setSpotInfo(spot));
        dispatch(setSearchTerm(spot.name));
    }

    const spotButtons = favoriteSpots.map((spot, index)=> 
        <button onClick={()=>{handleClick(spot)}}>{spot.name}</button>
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