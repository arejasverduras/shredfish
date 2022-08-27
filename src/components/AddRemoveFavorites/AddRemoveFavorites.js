import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteSpot, removeFavoriteSpot, selectFavoriteSpots } from '../SpotSelector/SpotSlice';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';



export const AddRemoveFavorites = ({spotname, spot})=> {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);
    
    const isFavorite = favoriteSpots.find(favSpot => favSpot.name === spot.name);

    //logic to add to favorites
    const handleClickRemove = (spotname) => {
        console.log(spotname);
        dispatch(removeFavoriteSpot(spotname));
    }

    const handleClickAdd = (spot) => {
        console.log(spot.name);
        dispatch(addFavoriteSpot({
                name: spot.name,
                state: spot.state,
                country: spot.country    
            })
                );
    }

    if (!isFavorite) {
        return (
            <>
            <button 
                className='FavoritesButton Plus'
                onClick={()=>{handleClickAdd(spot)}} 
                value={spotname}
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
                onClick={()=>{handleClickRemove(spotname)}} 
                value={spotname}
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
