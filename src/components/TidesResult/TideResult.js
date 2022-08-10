import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTidesData } from './TidesResultSlice';
import { selectSpotKey } from '../SpotSelector/SpotSlice';
import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraph } from './TidesGraph/TidesGraph';
import { TidesSummary } from './TidesSummary/TidesSummary';

export const TideResult = () => {
    const dispatch = useDispatch();

    const spotKey = useSelector(selectSpotKey);

    const tides = 'tides?';
    const spotId = spotKey;
    const params = `spotId=${spotId}`;
    const days = '&days=1'

    const urlAppendTide = tides+params+days;

    useEffect(()=>{
        dispatch(getTidesData(urlAppendTide));
    },[urlAppendTide])
    
    // Refactored logic starts here
    return (
        <div className="TideResult">
            <TidesStatus />
            <TidesGraph />
            <TidesSummary />
        </div>
    )


    

}