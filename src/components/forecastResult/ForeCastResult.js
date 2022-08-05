import React from 'react';
import Surfline from '../../features/ForeCastData/Surfline';

export const ForeCastResult = () => {
    const type = 'wave';
    const spotId = '584204204e65fad6a77095f0';
    const params = `spotId=${spotId}`;

    const spotData = Surfline.getSpotData(type, params);
    // console.log(spotData);
    const spotKeys = Object.values;
    console.log(spotKeys);

    return (
        <div className='ForeCastResult'>
            <h1>Spotname</h1>
            <p>ForeCastData from Surfline api</p>
            <p>{spotData}</p>
            
        </div>
    )
}