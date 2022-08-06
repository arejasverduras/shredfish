import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Surfline from '../../features/ForeCastData/Surfline';
import { selectForeCast } from '../../features/ForeCastData/ForeCastDataSlice';
import { store } from '../../app/store';

export const ForeCastResult = () => {
    const dispatch = useDispatch();
    
    const type = 'wave';
    const spotId = '584204204e65fad6a77095f0';
    const params = `spotId=${spotId}`;

    let spotData2 = useSelector(selectForeCast);
    

    const spotDataList = spotData2.map(item => 
        <li>{item}</li>
    )

    useEffect(()=>{
        dispatch(spotData)
    },[])

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
            <p>{spotData2}</p>
            
            
        </div>
    )
}