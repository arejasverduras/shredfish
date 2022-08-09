import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData, selectWeatherStatus } from './WeatherSlice';
import { selectSpotKey, selectSpotName } from '../SpotSelector/SpotSlice';

export const WeatherResult = () => {
    const dispatch = useDispatch();

    const spotName = useSelector(selectSpotName);
    const weatherStatus = useSelector(selectWeatherStatus);

    //get variables for API call
    const type = 'weather';
    const spotId = useSelector(selectSpotKey);
    const days = 1;

    const reqUrl = `${type}?&spotId=${spotId}&days=${days}`;

    useEffect(()=>{
        dispatch(getWeatherData(reqUrl));  
    },[reqUrl])
    
    return (
        <>
        </>
    )
}
