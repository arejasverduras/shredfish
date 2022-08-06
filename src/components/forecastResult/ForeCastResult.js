import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForeCast, selectStatus, getSpotData } from '../../features/ForeCastData/ForeCastDataSlice';

export const ForeCastResult = () => {
    const dispatch = useDispatch();
    
    const type = 'wave?';
    const spotId = '584204204e65fad6a77095f0';
    const params = `spotId=${spotId}`;
    const days = '&days=1'
    const urlAppend = type+params+days;

    let spotData = useSelector(selectForeCast);
    const status = useSelector(selectStatus);


    // console.log(state.spotdata.wave[0])
        // set current time to hour to integer
        const current = new Date();
        const hour = current.getHours();
        const timeNow = current.toLocaleTimeString();

        const timestamp = status!== 'succeeded'? spotData: spotData.wave[hour].timestamp;

    useEffect(()=>{
        dispatch(getSpotData(urlAppend))
    },[])

    let dataJSX;
    let noDataJSX;

    if (status !== 'succeeded'){
        noDataJSX = (
            <>
            <h3>Time</h3>
                <p>{timeNow}</p>
            </>
        )
    } else {
        dataJSX = (
            <>
            <h3>Hour</h3>
            <p>{`${hour}:00`}</p>
        <h3>Surf Height</h3>
            <p>{spotData.wave[hour].surf.min} - {spotData.wave[hour].surf.max}</p>
            <p>{spotData.wave[hour].surf.humanRelation}</p>
        <h3>Period</h3>
            <p>{spotData.wave[hour].swells[0].period}</p>
        <h3>Swell Direction</h3>
            <p>{spotData.wave[hour].swells[0].direction}</p>
            </>
        )
    }

    
    return (
        <div className='ForeCastResult'>
            <h1>Select Spot</h1>
                <p>Scheveningen Noord</p>
            <h2>Status</h2>
                <p>{status}</p>
            <h2>SpotData</h2>
            {status !== 'succeeded'? noDataJSX: dataJSX}

            {/* <h3>Time</h3>
                <p>{status!== 'succeeded'? spotData: timestamp}</p>
            <h3>Surf Height</h3>
                <p>{status!== 'succeeded'? spotData: spotData.wave[0].surf.min} - {status!== 'succeeded'? spotData: spotData.wave[0].surf.max}</p>
                <p>{status!== 'succeeded'? spotData: spotData.wave[0].surf.humanRelation}</p>
            <h3>Period</h3>
                <p>{spotData.wave[0].swells[0].period}</p> */}
        </div>
    )
}