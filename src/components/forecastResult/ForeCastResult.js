import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Surfline from '../../features/ForeCastData/Surfline';
import { selectForeCast, selectStatus, getSpotData } from '../../features/ForeCastData/ForeCastDataSlice';



export const ForeCastResult = () => {
    const dispatch = useDispatch();
    
    const type = 'wave?';
    const spotId = '584204204e65fad6a77095f0';
    const params = `spotId=${spotId}`;
    const urlAppend = type+params;

    let spotData = useSelector(selectForeCast);
    const status = useSelector(selectStatus);

    const spotDataKeys = Object.keys(spotData);



    useEffect(()=>{
        dispatch(getSpotData(urlAppend))
    },[])
    


    return (
        <div className='ForeCastResult'>
            <h1>Spotname</h1>
            <p>ForeCastData from Surfline api</p>
            <h2>Status</h2>
            <p>{status}</p>
            <h2>SpotData</h2>
            <p>{status!== 'succeeded'? spotData: spotDataKeys}</p>
            
            
        </div>
    )
}