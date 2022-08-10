import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTidesData } from './TidesResultSlice';
import { selectSpotKey } from '../SpotSelector/SpotSlice';
import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraph } from './TidesGraph/TidesGraph';
import { TidesSummary } from './TidesSummary/TidesSummary';

export const TideResult = () => {
    const dispatch = useDispatch();

    //get variables for API call
    const type = 'tides?';
    const spotId = useSelector(selectSpotKey);
    const days = 1;

    const reqUrl = `${type}?&spotId=${spotId}&days=${days}`;

    // const urlAppendTide = tides+params+days;

    useEffect(()=>{
        dispatch(getTidesData(reqUrl));
    },[reqUrl])
    
    // Refactored logic starts here
    return (
        <div className="TideResult">
            <TidesStatus />
            <TidesGraph />
            <TidesSummary />
        </div>
    )


    

}