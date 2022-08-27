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
        const title = document.getElementsByTagName('h1')[0];
        title.scrollIntoView({behavior: 'smooth'});
    }

    //remove from favorites

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
            {spot.name}   
        </li> 
        <AddRemoveFavorites spotname={spot.name} />
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