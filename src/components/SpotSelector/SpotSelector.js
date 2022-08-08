import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpotName, setSpotInfo } from './SpotSlice';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const spotName = useSelector(selectSpotName);

    const mySpots = [{
        name: 'Skiffa',
        key: '584204204e65fad6a77095f0'
    },{
        name: 'Ter heije',
        key: '584204204e65fad6a77095f1'
    },{
        name: 'Hoekie',
        key: '584204204e65fad6a77095f2'
    },
    {
        name: 'Sopelana',
        key: '5842041f4e65fad6a7708e75'
    }]; 

    const spotButtons = mySpots.map((spot, index)=> 
        <button onClick={()=>{dispatch(setSpotInfo(spot))}}>{spot.name}</button>
    )
    
    return (
        <div className="SpotSelector">
        <h1>Select Spot</h1>
                <div className="spotButtons">
                    {spotButtons}
                </div>
                
        </div>
    )
}