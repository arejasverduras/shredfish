import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWindData, selectWindData, selectWindStatus } from './WindSlice';
import { selectSpotKey, selectSpotName } from '../SpotSelector/SpotSlice';

export const WindResult = () => {
    const dispatch = useDispatch();
    
    //get variables for API call
    const type = 'wind';
    const spotId = useSelector(selectSpotKey);
    const days = 1;

    const reqUrl = `${type}?&spotId=${spotId}&days=${days}`;

    useEffect(()=>{
        dispatch(getWindData(reqUrl));
    },[reqUrl])

    return (
        <>
        </>
    )
}