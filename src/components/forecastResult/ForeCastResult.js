import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectForeCast, selectStatus, getWaveData, getTidesData } from '../../features/ForeCastData/ForeCastDataSlice';
import { TideResult } from '../TidesResult/TideResult';

export const ForeCastResult = () => {
    const dispatch = useDispatch();
    
    const wave = 'wave?';
    const wind = 'wind?';
    // ter heijde: 584204204e65fad6a77095f3
    //scheveningen: 584204204e65fad6a77095f0
    //hvh: 584204204e65fad6a77095f2
    const spotId = '584204204e65fad6a77095f0';
    const params = `spotId=${spotId}`;
    const days = '&days=1'

    const urlAppendWave = wave+params+days;
    const urlAppendWind = wind+params+days;

    let spotData = useSelector(selectForeCast);
    const status = useSelector(selectStatus);


    // console.log(state.spotdata.wave[0])
        // set current time to hour to integer
        const current = new Date();
        const hour = current.getHours();
        const timeNow = current.toLocaleTimeString();

    useEffect(()=>{
        dispatch(getWaveData(urlAppendWave));  
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
        <tr key={index} className={index === hour? 'currentHourRow':''}>
            <td className='tableHour'>{index}</td>
            <td><strong>{hourdata.surf.min} - {hourdata.surf.max}m</strong></td>
            {/* Primary swell */}
            <td className="primary pSwell">{hourdata.swells[0].height.toFixed(1)}m </td>
            <td className="primary pPeriod"><b>{hourdata.swells[0].period}s</b></td>
            <td className="primary pDirection">
                <div style={{
                   width: 20,
                   height: 35,
                   backgroundColor: 'gold',
                   borderBottomLeftRadius: '50%',
                   borderBottomRightRadius: '50%',
                   rotate: `${hourdata.swells[0].direction}deg` 
                }} className="primary swellDirectionArrow">

                </div>
            </td>
            {/* secondary swell */}
            <td className={hourdata.swells[1].height.toFixed(1)<= 0.09?'':'secondarySwell'}>
                {hourdata.swells[1].height.toFixed(1)<= 0.09? '':hourdata.swells[1].height.toFixed(1)+'m '+hourdata.swells[0].period+'s '}
                {hourdata.swells[1].height.toFixed(1)<= 0.09? '':
                (<div style={{
                    width: 15,
                    height: 30,
                    backgroundColor: 'lightgreen',
                    borderBottomLeftRadius: '50%',
                    borderBottomRightRadius: '50%',
                    marginLeft: 8,
                    rotate: `${hourdata.swells[1].direction}deg` 
                    }} className="seconday swellDirectionArrow">
                </div>)}
            </td>

        </tr> )

        tableJSX = (
            <div className='tableHolder'>
                <table>
                    <thead>
                        <tr>
                            <td className='tableHour'>Hour</td>
                            <td>surf</td>
                            <td colSpan="3">Primary swell</td>
                            <td>Secondary swell</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableList}
                   </tbody>
                </table>
            </div>
        );
    }

    
    return (
        <div className='ForeCastResult'>
            <h1>Select Spot</h1>
                <p>Scheveningen Noord</p>
            <h2>Status</h2>
                <p>{status}</p>
            <h2>Current</h2>
            {status !== 'succeeded'? noDataJSX: dataJSX}
            <h2>ForeCast</h2>
            {status !== 'succeeded'? 'no table yet': tableJSX}
            <TideResult />
            </div>
            
    )
}