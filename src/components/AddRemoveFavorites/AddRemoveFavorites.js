import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteSpot, removeFavoriteSpot } from '../SpotSelector/SpotSlice';

export const AddRemoveFavorites = ({spotname, type})=> {
    const dispatch = useDispatch();
    
    //type = add or remove
    //render different layout button based on type
    //triggers different logic based on type

    //logic to add to favorites
    const handleClickRemove = ({target}) => {
        console.log(target.value);
        dispatch(removeFavoriteSpot(target.value));
    }

    const handleClickAdd = ({target}) => {
        console.log(target.value);
        dispatch(addFavoriteSpot({
                name: target.value})
                );
    }

    if (type === 'add') {
        return (
            <button 
                className='FavoritesButton'
                onClick={handleClickAdd} 
                value={spotname}>
                +
        </button>
        )
    } else {

    return (
            <button 
                className='FavoritesButton'
                onClick={handleClickRemove} 
                value={spotname}>
            -
    </button>
    )
    }


}
