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

    useEffect(()=>{
        dispatch(getSpotData(urlAppend))
    },[])

    let dataJSX;
    let noDataJSX;
    let tableJSX;

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

        const tableList = spotData.wave.map((hourdata, index ) => 
        <tr key={index}>
            <td>{index}</td>
            <td><strong>{hourdata.surf.min} - {hourdata.surf.max}m</strong></td>
            <td>{hourdata.swells[0].height.toFixed(1)}m   <b>{hourdata.swells[0].period}s</b></td>
            <td>{hourdata.swells[0].direction.toFixed(1)}</td>
        </tr> )

        tableJSX = (
            <>
                <table>
                    <thead>
                        <tr>
                            <td>Hour</td>
                            <td>surf</td>
                            <td>Primary swell</td>
                            <td>swell direction</td>
                            <td>Secondary swell</td>
                            <td>wind</td>
                            <td>tide</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableList}
                   </tbody>
                </table>
            </>
        );
    }

    
    return (
        <div className='ForeCastResult'>
            <h1>Select Spot</h1>
                <p>Scheveningen Noord</p>
            <h2>Status</h2>
                <p>{status}</p>
            <h2>ForeCast</h2>
            {status !== 'succeeded'? noDataJSX: dataJSX}
            {status !== 'succeeded'? 'no table yet': tableJSX}
            </div>
    )
}