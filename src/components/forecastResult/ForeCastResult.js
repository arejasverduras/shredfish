import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpotKey } from '../SpotSelector/SpotSlice';
import { getWaveData } from '../../features/ForeCastData/ForeCastDataSlice';

export const ForeCastResult = () => {
    const dispatch = useDispatch();
    
    //get variables for API call
    const type = 'wave';
    const spotId = useSelector(selectSpotKey);
    const days = 1;

    const reqUrl = `${type}?&spotId=${spotId}&days=${days}&sds=true`;

    useEffect(()=>{
        dispatch(getWaveData(reqUrl));  
    },[reqUrl])

    return (
        <>
        </>
    )
}