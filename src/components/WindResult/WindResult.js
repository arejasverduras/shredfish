import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWindData, selectWindData, selectWindStatus } from './WindSlice';
import { selectSpotKey, selectSpotName } from '../SpotSelector/SpotSlice';

export const WindResult = () => {
    const dispatch = useDispatch();
    
    const spotName = useSelector(selectSpotName);
    const spotKey = useSelector(selectSpotKey);

    const wind = 'wind?';
    const spotId = spotKey;
    const params = `spotId=${spotId}`;
    const days = '&days=1'

    const urlAppendWind = wind+params+days;

    const windData = useSelector(selectWindData)
    const windStatus = useSelector(selectWindStatus);

    const current = new Date();
    const hour = current.getHours();
    const timeNow = current.toLocaleTimeString();

    // convert timestamp to changes
    const timestampToTime = (stamp) => {
        const converted = new Date(stamp);
        const fulldate = converted.toString();
        let minutes;
        if (converted.getMinutes() < 10){
            minutes = '0'+converted.getMinutes();
        } else {
            minutes = converted.getMinutes();
        }
        const time = converted.getHours()+":"+minutes;
        return time;
    }

    useEffect(()=>{
        dispatch(getWindData(urlAppendWind));
    },[spotKey])

    return (
        <>
        </>
    )
}