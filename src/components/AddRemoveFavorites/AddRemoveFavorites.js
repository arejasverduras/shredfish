import React from 'react';
import { useSelector } from 'react-redux';

export const AddRemoveFavorites = ({spotname, type})=> {
    //type = add or remove
    //render different layout button based on type
    //triggers different logic based on type

    //logic to add to favorites
    const handleClick = ({target}) => {
        console.log(target.value);
    }

    return (
        <>
            <button 
                className={type === 'add'? 'addToFavorites': 'removeFromFavorites'}
                onClick={handleClick} 
                value={spotname}>
                {type ==='add'?'+':'-'}
            </button>
        </>
    )

}
