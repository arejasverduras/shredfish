import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteSpots, setSearchTerm, setSpotInfo } from './SpotSlice';
import { AddRemoveFavorites } from '../AddRemoveFavorites/AddRemoveFavorites';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);

    const handleClick = (spot) => {
        dispatch(setSpotInfo(spot));
        dispatch(setSearchTerm(spot.name));
    }

    //remove from favorites

    const spotLinks = favoriteSpots.map((spot, index)=> 
      <li key={index} className="favoriteLink" onClick={()=>{handleClick(spot)}}>
        {spot.name}
        <AddRemoveFavorites type='remove' spotname={spot.name} />
        </li>

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