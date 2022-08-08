import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpotName } from './SpotSlice';

export const SpotSelector = () => {
    const dispatch = useDispatch();
    const spotName = useSelector(selectSpotName);
    
    return (
        <div className="SpotSelector">
        <h1>Select Spot</h1>
                <p>{spotName}</p>
                <p>{}</p>
        </div>
    )
}