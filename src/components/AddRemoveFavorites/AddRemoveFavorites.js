import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteSpot, removeFavoriteSpot } from '../SpotSelector/SpotSlice';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeartCirclePlus, faHeart, faHeartCircleMinus} from '@fortawesome/free-solid-svg-icons';

export const AddRemoveFavorites = ({spotname, type})=> {
    const dispatch = useDispatch();
    
    //type = add or remove
    //render different layout button based on type
    //triggers different logic based on type
    


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

    if (type === 'add') {
        return (
            <>
            <button 
                className='FavoritesButton Plus'
                onClick={()=>{handleClickAdd(spotname)}} 
                value={spotname}>
                <FontAwesomeIcon 
                    icon={faHeart} 
                    size="2x"
                    style={{
                        color: 'white',

                    }}
                    />
        </button>

        </>
        )
    } else {

    return (
            <button 
                className='FavoritesButton Minus'
                onClick={()=>{handleClickRemove(spotname)}} 
                value={spotname}>
                  <FontAwesomeIcon 
                    icon={faHeartCircleMinus} 
                    size="2x"
                    style={{
                        color: 'white',

                    }}
                    />
    </button>
    )
    }


}
