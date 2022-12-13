import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteSpot, removeFavoriteSpot, selectFavoriteSpots } from '../SpotSelector/SpotSlice';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

export const AddRemoveFavorites = ({spot})=> {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);
    
    const isFavorite = favoriteSpots.find(favSpot => favSpot.name === spot.name && favSpot.state === spot.state);

    //logic to remove from favorites
    const handleClickRemove = (spot) => {
        dispatch(removeFavoriteSpot(spot));
    }
    
    //logic to add to favorites
    const handleClickAdd = (spot) => {
        dispatch(addFavoriteSpot({
                name: spot.name,
                state: spot.state,
                country: spot.country,
                lat: spot.lat,
                lon: spot.lon    
            })
                );
    }

    if (!isFavorite) {
        return (
            <>
            <button 
                className='FavoritesButton Plus'
                onClick={()=>{handleClickAdd(spot)}} 
                value={spot.name}
                title="Add to favorites">
                <FontAwesomeIcon 
                    icon={faHeart} 
                    size="2x"
                    className='faHeartPlus'
                    />
        </button>

        </>
        )
    } else {

    return (
            <button 
                className='FavoritesButton Minus'
                onClick={()=>{handleClickRemove(spot)}} 
                value={spot.name}
                title="Remove from favorites">
                  <FontAwesomeIcon 
                    icon={faHeart}
                    size="2x"
                    className="faHeartMinus"
                    />
    </button>
    )
    }


}
