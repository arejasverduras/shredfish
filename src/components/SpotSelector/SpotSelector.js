import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteSpots, setSearchTerm, setSpotInfo, setCurrentSpot } from './SpotSlice';
import { AddRemoveFavorites } from '../AddRemoveFavorites/AddRemoveFavorites';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);

    const handleClick = (spot) => {
        dispatch(setCurrentSpot(spot));
        // dispatch(setSearchTerm(`${spot.name}, ${spot.state || ''}, ${spot.country}`));
        const title = document.getElementsByTagName('h1')[0];
        title.scrollIntoView({behavior: 'smooth'});
    }

    //generate favorite spotlist and remove favorite button
    const spotLinks = favoriteSpots.map((spot, index)=> 
      <div style ={{
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