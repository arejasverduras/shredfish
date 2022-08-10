import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTidesData, selectTidesStatus, getTidesData } from './TidesResultSlice';
import { selectSpotKey, selectSpotName } from '../SpotSelector/SpotSlice';
import { TidesStatus } from './TidesStatus/TidesStatus';
import { TidesGraph } from './TidesGraph/TidesGraph';
import { timestampToTime } from '../../features/features';

export const TideResult = () => {
    const dispatch = useDispatch();
    
    const spotName = useSelector(selectSpotName);
    const spotKey = useSelector(selectSpotKey);

    const tides = 'tides?';
    const spotId = spotKey;
    const params = `spotId=${spotId}`;
    const days = '&days=1'

    const urlAppendTide = tides+params+days;

    const tidesData = useSelector(selectTidesData)
    const tidesStatus = useSelector(selectTidesStatus);

    useEffect(()=>{
        dispatch(getTidesData(urlAppendTide));
    },[urlAppendTide])
    
    // Refactored logic starts here
    // return (
    //     <>
    //         <TidesStatus />
    //         <TidesGraph />
    //     </>
    // )

    if (tidesStatus !== 'succeeded') {
        return (
            <div className="NoTideResult">
                <h3>No tides available</h3>
                <p>Loading status : {tidesStatus}</p>
            </div>
        )
    } else {
        //filter the tides array
        const tidesOnly = tidesData.tides.filter((hourdata) => hourdata.type === 'NORMAL');

        const tidesResultGraphIndex = tidesOnly.map((hourdata, index) => 
        <div key={index} style={{
            width: '4%', 
            borderLeft: "1px solid black",
            fontSize: '8px'
            }}>
                {index}
        </div>)    
        
        const tidesResultGraph = tidesOnly.map((hourdata, index) => 
        <div key={index} style={{
            width: '4%', 
            border: "1px solid black",
            backgroundColor: 'aquamarine',
            height: hourdata.height*100,
            fontSize: '8px'
            }}>
        </div>
            )

        // Refactor from here    
        const tideResultInfo = tidesData.tides.filter((hourdata) => hourdata.type !== 'NORMAL');
        console.log(tideResultInfo);

        const tideLows = tideResultInfo.filter((peak) => peak.type === 'LOW');
        const tideHighs = tideResultInfo.filter((peak) => peak.type === 'HIGH');
        console.log(tideHighs);

        const tideLowCells= tideLows.map((low, index) =>
        <>
        <td key={index}>{low.type}</td>
        <td key={index+10}>{timestampToTime(low.timestamp*1000)}</td>
        </>
        )

        const tideHighCells= tideHighs.map((high, index) =>
        <>
        <td key={index}>{high.type}</td>
        <td key={index+10}>{timestampToTime(high.timestamp*1000)}</td>
        </>
        )
            
        return (
            <div className="TideResult">
                <h3>Tides available</h3>
                <p>Loading status: {tidesStatus}</p>
                <div className="tidesGraph" style={{display: 'flex'}}>
                    {tidesResultGraphIndex} 
                </div>
                <div style={{display: 'flex'}}>
                    {tidesResultGraph}
                </div>

                <div className="tidesInfo">
                    <table>
                        <tr>
                            {tideLowCells}
                        </tr>
                        <tr>
                            {tideHighCells}
                        </tr>
                    </table>
                </div>
            </div>
        )
    }


    

}