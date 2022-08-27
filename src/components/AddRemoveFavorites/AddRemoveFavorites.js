import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteSpot, removeFavoriteSpot, selectFavoriteSpots } from '../SpotSelector/SpotSlice';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus, faHeart as faHeartSolid, faHeartCircleMinus} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


export const AddRemoveFavorites = ({spotname, type})=> {
    const dispatch = useDispatch();
    const favoriteSpots = useSelector(selectFavoriteSpots);
    //type = add or remove
    //render different layout button based on type
    //triggers different logic based on type
    //should check if spotname is in favorites
    const isFavorite = favoriteSpots.find(spot => spot.name === spotname);



    //logic to add to favorites
    const handleClickRemove = (spotname) => {
        console.log(spotname);
        dispatch(removeFavoriteSpot(spotname));
    }

    const handleClickAdd = (spotname) => {
        console.log(spotname);
        dispatch(addFavoriteSpot({
                name: spotname})
                );
    }

    if (!isFavorite) {
        return (
            <>
            <button 
                className='FavoritesButton Plus'
                onClick={()=>{handleClickAdd(spotname)}} 
                value={spotname}
                title="Add to favorites">
                <FontAwesomeIcon 
                    icon={faHeartSolid} 
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
                    icon={faHeartSolid}
                    size="2x"
                    className="faHeartMinus"
                    />
    </button>
    )
    }


}
