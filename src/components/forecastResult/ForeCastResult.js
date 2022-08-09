import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpotName, selectSpotKey } from '../SpotSelector/SpotSlice';
import { selectForeCast, selectStatus, getWaveData } from '../../features/ForeCastData/ForeCastDataSlice';
import arrow from '../../up-arrow-swell.svg'
import { WindResult } from '../WindResult/WindResult';
import { Current } from '../Current/Current';
import { getHour } from '../../features/features';

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
    },[spotId])

    let spotData = useSelector(selectForeCast);
    const status = useSelector(selectStatus);

    const {hour, timeNow} = getHour();

    let dataJSX;
    let noDataJSX;
    let tableJSX;

    if (status !== 'succeeded'){
        noDataJSX = (
            <>
            
            </>
        )
    } else {
        dataJSX = (
        ''
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
            {status !== 'succeeded'? 'no table yet': tableJSX}
            </div>
            </>
            
            
    )
}