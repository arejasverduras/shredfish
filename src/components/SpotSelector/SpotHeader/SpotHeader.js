import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../SpotSlice";
import { AddRemoveFavorites } from "../../AddRemoveFavorites/AddRemoveFavorites";

export const SpotHeader = ()=>{
    //displays current spot Name
    //loads add to favorite button
    
    const currentSpot = useSelector(selectCurrentSpot);
    const spot = currentSpot.data[0];
    const {name, state, country}= spot;


    return (
        <div className='ForeCastNameAndStatus'>
            <h1>{name}
                <AddRemoveFavorites type={'add'} spotname={name} spot={spot} /></h1>
            <h2>{state || ''}, {country}</h2>
    </div>
    )
}