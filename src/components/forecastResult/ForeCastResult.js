import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Surfline from '../../features/ForeCastData/Surfline';
import { selectForeCast, selectStatus } from '../../features/ForeCastData/ForeCastDataSlice';

export const ForeCastResult = () => {
    const dispatch = useDispatch();
    
    const type = 'wave';
    const spotId = '584204204e65fad6a77095f0';
    const params = `spotId=${spotId}`;

    let spotData2 = useSelector(selectForeCast);
    const status = useSelector(selectStatus);
    


    // const spotData = async () => {
    //     const dataStream = await Surfline.getData(type, params);
    //     // const dataArray = Object.keys(dataStream);
    //     // console.log(dataArray[0]);
    //     console.log(dataStream[0]);
    //     return <p>{dataStream[0]}</p>; 
            
        
    // };

    return (
        <div className='ForeCastResult'>
            <h1>Spotname</h1>
            <p>ForeCastData from Surfline api</p>
            <h2>Status</h2>
            <p>{status}</p>
            <h2>SpotData</h2>
            <p>{spotData2}</p>
            
            
        </div>
    )
}