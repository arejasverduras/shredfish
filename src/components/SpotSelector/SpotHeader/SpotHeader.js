import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../SpotSlice";
import { AddRemoveFavorites } from "../../AddRemoveFavorites/AddRemoveFavorites";

export const SpotHeader = ()=>{
    //rendes current spot name, state and country
    //renders add to favorite button
    
    const currentSpot = useSelector(selectCurrentSpot);
    const spot = currentSpot.data[0];
    const {name, state, country}= spot;

    const scrollToSpot = () =>{
        if (currentSpot.data[0])
        {const title = document.getElementsByTagName('h1')[0];
        title.scrollIntoView({behavior: 'smooth'});}
        else {
            return
        }
    }

    useEffect(scrollToSpot, [currentSpot])


    return (
        <div className='ForeCastNameAndStatus'>
            <h1>{name}
                <AddRemoveFavorites type={'add'} spot={spot} /></h1>
            <h2>{state || ''}, {country}</h2>
    </div>
    )
}