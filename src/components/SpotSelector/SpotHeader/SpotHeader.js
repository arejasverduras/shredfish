import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../SpotSlice";
import { AddRemoveFavorites } from "../../AddRemoveFavorites/AddRemoveFavorites";

export const SpotHeader = ()=>{
    //displays current spot Name
    //loads add to favorite button
    
    const currentSpot = useSelector(selectCurrentSpot);
    const spotname = currentSpot.data[0].name;


    return (
        <div className='ForeCastNameAndStatus'>
            <h1>{spotname} 
                <AddRemoveFavorites type={'add'} spotname={spotname} /></h1>
    </div>
    )
}