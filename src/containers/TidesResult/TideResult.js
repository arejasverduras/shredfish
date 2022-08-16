import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTidesData } from './TidesResultSlice';
import { selectSpotKey } from '../../components/SpotSelector/SpotSlice';
import { TidesStatus } from '../../components/Tides/TidesStatus/TidesStatus';
import { TidesGraph } from '../../components/Tides/TidesGraph/TidesGraph';
import { TidesSummary } from '../../components/Tides/TidesSummary/TidesSummary';

export const TideResult = () => {
    const dispatch = useDispatch();

    //get variables for API call
    const type = 'tides?';
    const spotId = useSelector(selectSpotKey);
    const days = 1;

    const reqUrl = `${type}?&spotId=${spotId}&days=${days}`;

    useEffect(()=>{
        dispatch(getTidesData(reqUrl));
    },[reqUrl])
    
    return (
        <div className="TideResult">
            <TidesStatus />
            <TidesGraph />
            <TidesSummary />
        </div>
    )


    

}