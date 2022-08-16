import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTidesData } from './TidesResultSlice';
import { selectSpotKey } from '../../components/SpotSelector/SpotSlice';

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
        <>
        </>
    )


    

}