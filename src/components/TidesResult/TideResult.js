import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTidesData, selectTidesStatus, getTidesData } from './TidesResultSlice';

export const TideResult = () => {
    const dispatch = useDispatch();
    
    const tides = 'tides?';
    const spotId = '584204204e65fad6a77095f0';
        // ter heijde: 584204204e65fad6a77095f3
    //scheveningen: 584204204e65fad6a77095f0
    //hvh: 584204204e65fad6a77095f2
    const params = `spotId=${spotId}`;
    const days = '&days=1'
    const intervalHours = '&intervalHours=1'

    const urlAppendTide = tides+params+days+intervalHours;

    const tidesData = useSelector(selectTidesData)
    const tidesStatus = useSelector(selectTidesStatus);

    const current = new Date();
    const hour = current.getHours();
    const timeNow = current.toLocaleTimeString();

    // convert timestamp to changes
    const timestampToTime = (stamp) => {
        const converted = new Date(stamp);
        const fulldate = converted.toString();
        let minutes;
        if (converted.getMinutes() < 10){
            minutes = '0'+converted.getMinutes();
        } else {
            minutes = converted.getMinutes();
        }
        const time = converted.getHours()+":"+minutes;
        return time;
    }

    useEffect(()=>{
        dispatch(getTidesData(urlAppendTide));
    },[])
    
    if (tidesStatus !== 'succeeded') {
        return (
            <div className="NoTideResult">
                <h3>No tides available</h3>
                <p>Loading status: {tidesStatus}</p>
                <p>{tidesData}</p>
    
            </div>
        )
    } else {
        //filter the tides array
        const tidesOnly = tidesData.tides.filter((hourdata) => hourdata.type === 'NORMAL');

        // const tidesHeader = tidesOnly.map((hourdata, index) =>
        //     <td className='tidesHeaderCell' key={index}>{index}</td>)

        // const tidesResultHeight = tidesOnly.map((hourdata, index) => 
        //     <td className="tidesHeights" key={index}>{hourdata.height}m</td>
        //     )

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

        const tidesResultType = tidesOnly.map((hourdata, index) => 
            <td key={index}>{hourdata.type}</td>
            )
        
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

        const tideTable = (
            <>
            <tr>
                <td>{tideLows[0].type}</td><td key="1">{timestampToTime(tideLows[0].timestamp*1000)}</td>
            </tr>
            <tr>
                <td>{tideHighs[0].type}</td><td key="1">{timestampToTime(tideHighs[0].timestamp*1000)}</td>
            </tr>
            <tr>
                <td>{tideLows[1].type}</td><td key="1">{timestampToTime(tideLows[1].timestamp*1000)}</td>
            </tr>
            <tr>
                <td>{tideHighs[1].type}</td><td key="1">{timestampToTime(tideHighs[1].timestamp*1000)}</td>
            </tr>
            </>
        )
 


            
        return (
            <div className="TideResult">
                <h3>Tides available</h3>
                <p>Loading status: {tidesStatus}</p>
                <table className="tidesTable">
                    <thead>
                        <tr>
                            {/* {tidesHeader} */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* {tidesResultHeight} */}
                        </tr>                  
                    </tbody>
                </table>
                <div className="tidesGraph" style={{display: 'flex'}}>
                    {tidesResultGraphIndex} 
                </div>
                <div style={{display: 'flex'}}>
                    {tidesResultGraph}
                </div>
                <div className="tidesInfo">
                    <table>
                        {/* <tr>
                            {tideLowCells}
                        </tr>
                        <tr>
                            {tideHighCells}
                        </tr> */}
                    </table>
                <div className="tideTable">
                    <table>
                            {tideTable}
                    </table>
                </div>
                </div>

            </div>
        )
    }
    

}