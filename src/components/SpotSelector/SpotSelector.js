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

    //remove from favorites

    const spotLinks = favoriteSpots.map((spot, index)=> 
      <li key={index} className="favoriteLink" onClick={()=>{handleClick(spot)}}>{spot.name}</li>

)
    
    return (
        <div className="SpotSelector">
        <h2>My Favorite Spots</h2>
                {/* <div className="spotButtons">
                    {spotButtons}
                </div> */}
                <div className="favoriteSpots">
                    <ul className='favoriteList'>
                        {spotLinks}
                    </ul>
                </div>
                
        </div>
    )
}