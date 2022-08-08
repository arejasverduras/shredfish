import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpotName, selectSpotKey } from '../SpotSelector/SpotSlice';
import { selectForeCast, selectStatus, getWaveData } from '../../features/ForeCastData/ForeCastDataSlice';
import arrow from '../../up-arrow-swell.svg'

export const ForeCastResult = () => {
    const dispatch = useDispatch();

    const spotName = useSelector(selectSpotName);
    const spotKey = useSelector(selectSpotKey);
    
    const wave = 'wave?';
    const spotId = spotKey;
    const params = `spotId=${spotId}`;
    const days = '&days=1'

    const urlAppendWave = wave+params+days;

    let spotData = useSelector(selectForeCast);
    const status = useSelector(selectStatus);


    // console.log(state.spotdata.wave[0])
        // set current time to hour to integer
        const current = new Date();
        const hour = current.getHours();
        const timeNow = current.toLocaleTimeString();

    useEffect(()=>{
        dispatch(getWaveData(urlAppendWave));  
    },[spotKey])

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
        <div className="currentSummary">

            <div className="current SurfHeight">
                <h3>Surf Height</h3>
                    <p className="highlight">{spotData.wave[hour].surf.min} - {spotData.wave[hour].surf.max}</p>
                    <p>{spotData.wave[hour].surf.humanRelation}</p>
            </div>
            <div className="current Period">
                <h3>Period</h3>
                    <p className='highlight'>{spotData.wave[hour].swells[0].period}</p>
            </div>
            <div className="current Direction">
                <h3>Swell Direction</h3>
                <img src={arrow} className="swell-arrow" alt="swell-arrow" style={{
                    transform: `rotate(${spotData.wave[hour].swells[0].direction}deg)`
                    }} />
                    <p>{spotData.wave[hour].swells[0].direction}</p>
            </div>
        </div>
        )

        const tableList = spotData.wave.map((hourdata, index ) => 
        <tr key={index} className={index === hour? 'currentHourRow':''}>
            <td className='tableHour'>{index}</td>
            <td><strong>{hourdata.surf.min} - {hourdata.surf.max}m</strong></td>
            {/* Primary swell */}
            <td className="primary pSwell">{hourdata.swells[0].height.toFixed(1)}m </td>
            <td className="primary pPeriod"><b>{hourdata.swells[0].period}s</b></td>
            <td className="primary pDirection">
                <img src={arrow} className="swell-arrow" alt="swell-arrow" 
                    style={{
                    transform: `rotate(${hourdata.swells[0].direction}deg)`
                    }} />
            </td>
            {/* secondary swell */}
            <td className={hourdata.swells[1].height.toFixed(1)<= 0.09?'':'secondarySwell'}>
                {hourdata.swells[1].height.toFixed(1)<= 0.09? '':hourdata.swells[1].height.toFixed(1)+'m '+hourdata.swells[0].period+'s '}
                {hourdata.swells[1].height.toFixed(1)<= 0.09? '':
                (
                    <img src={arrow} className="swell-arrow" alt="swell-arrow" 
                    style={{
                    transform: `rotate(${hourdata.swells[1].direction}deg)`
                    }} />
                // <div style={{
                //     width: 15,
                //     height: 30,
                //     backgroundColor: 'lightgreen',
                //     borderBottomLeftRadius: '50%',
                //     borderBottomRightRadius: '50%',
                //     marginLeft: 8,
                //     rotate: `${hourdata.swells[1].direction}deg` 
                //     }} className="seconday swellDirectionArrow">
                // </div>
                )}
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
            <p>Get data: {status}</p>
            <h1>{spotName}</h1>
            <div className="ForeCastHeader">
                <div className="spotBasic">
                </div>
                <h2 style={{display: 'none'}}>Current</h2>
                {status !== 'succeeded'? noDataJSX: dataJSX}
                <div className="spotBasic"></div>
            </div>
            <h2>ForeCast</h2>
            {status !== 'succeeded'? 'no table yet': tableJSX}
            </div>
            
    )
}