import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../SpotSlice";

export const SpotHeader = ()=>{
    //displays current spot Name
    //loads add to favorite button
    
    const currentSpot = useSelector(selectCurrentSpot);

    return (
        <div className='ForeCastNameAndStatus'>
            <h1>{currentSpot.data[0].name}</h1>
    </div>
    )
}