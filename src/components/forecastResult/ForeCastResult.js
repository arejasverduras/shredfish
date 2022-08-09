import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpotName, selectSpotKey } from '../SpotSelector/SpotSlice';
import { selectStatus, getWaveData } from '../../features/ForeCastData/ForeCastDataSlice';
import { Current } from '../Current/Current';
import { ForeCastTable } from './ForeCastTable/ForeCastTable';

export const ForeCastResult = () => {
    const dispatch = useDispatch();

    const spotName = useSelector(selectSpotName);
    
    //get variables for API call
    const type = 'wave';
    const spotId = useSelector(selectSpotKey);
    const days = 1;

    const reqUrl = `${type}?&spotId=${spotId}&days=${days}`;

    useEffect(()=>{
        dispatch(getWaveData(reqUrl));  
    },[reqUrl])

    const status = useSelector(selectStatus);
    
    return (
        <>
        <div className='ForeCastResult'>
            <p>Get data: {status}</p>
            <h1>{spotName}</h1>
            <div className="ForeCastHeader">
                <div className="spotBasic">
                </div>
                <h2 style={{display: 'none'}}>Current</h2>
                <Current />
                <div className="spotBasic"></div>
            </div>
            <h2>ForeCast</h2>
            <ForeCastTable />
            </div>
            </>
            
            
    )
}