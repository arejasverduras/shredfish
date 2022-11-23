import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteSpots, setSearchTerm, setSpotInfo, setCurrentSpot, selectCurrentSpot } from './SpotSlice';
import { AddRemoveFavorites } from '../AddRemoveFavorites/AddRemoveFavorites';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);
    // const currentSpot = useSelector(selectCurrentSpot);

    const handleClick = (spot) => {
        dispatch(setCurrentSpot(spot));
    }

    //generate favorite spotlist and remove favorite button
    const spotLinks = favoriteSpots.map((spot, index)=> 
      <div key={index} style ={{
        display:'flex',
        justifyContent:'space-between'
      }}>
        <li 
            key={index} 
            className="favoriteLink" 
            onClick={()=>{handleClick(spot)}} 
        >
            {spot.name}, {spot.country}   
        </li> 
        <AddRemoveFavorites spot={spot} />
    </div>
    )

    return (
        <div className="SpotSelector">
        <h2>My Favorite Spots</h2>
                <div className="favoriteSpots">
                    <ul className='favoriteList'>
                        {spotLinks}
                       
                    </ul>
                </div>
                
        </div>
    )
}