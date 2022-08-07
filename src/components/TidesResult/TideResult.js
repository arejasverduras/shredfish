import {React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTidesData, selectTidesStatus, getTidesData } from './TidesResultSlice';

export const TideResult = () => {
    const dispatch = useDispatch();
    

    const tides = 'tides?';

    const spotId = '584204204e65fad6a77095f3';
        // ter heijde: 584204204e65fad6a77095f3
    //scheveningen: 584204204e65fad6a77095f0
    //hvh: 584204204e65fad6a77095f2
    const params = `spotId=${spotId}`;
    const days = '&days=1'
    const intervalHours = '&intervalHours=1'

    const urlAppendTide = tides+params+days+intervalHours;


    const tidesData = useSelector(selectTidesData)
    const tidesStatus = useSelector(selectTidesStatus);


    // console.log(state.spotdata.wave[0])
        // set current time to hour to integer
        const current = new Date();
        const hour = current.getHours();
        const timeNow = current.toLocaleTimeString();

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
        // const tableList = spotData.wave.map((hourdata, index ) => 
        // <tr key={index} className={index === hour? 'currentHourRow':''}>
        //     <td className='tableHour'>{index}</td>
        //     <td><strong>{hourdata.surf.min} - {hourdata.surf.max}m</strong></td>
        //     {/* Primary swell */}
        //     <td className="primary pSwell">{hourdata.swells[0].height.toFixed(1)}m </td>
        //     <td className="primary pPeriod"><b>{hourdata.swells[0].period}s</b></td>
        //     <td className="primary pDirection">{hourdata.swells[0].direction.toFixed(1)}</td>
        //     {/* secondary swell */}
        //     <td className="secondarySwell">{hourdata.swells[1].height.toFixed(1)<= 0.09? '':hourdata.swells[1].height.toFixed(1)+'m '+hourdata.swells[0].period+'s '+ hourdata.swells[1].direction.toFixed(1)}</td>

        // </tr> )

        //filter the tides array
        const tidesOnly = tidesData.tides.filter((hourdata) => hourdata.type === 'NORMAL');

        const tidesHeader = tidesOnly.map((hourdata, index) =>
            <td className='tidesHeaderCell' key={index}>{index}</td>)

        const tidesResultHeight = tidesOnly.map((hourdata, index) => 
            <td className="tidesHeights" key={index}>{hourdata.height}m</td>
            )


        const tidesResultGraphIndex = tidesOnly.map((hourdata, index) => 
        <div key={index} style={{
            width: '4%', 
            borderLeft: "1px solid black",
            fontSize: '8px'
            }}
            >
                {index}
                </div>)    
        const tidesResultGraph = tidesOnly.map((hourdata, index) => 
        <div key={index} style={{
            width: '4%', 
            border: "1px solid black",
            backgroundColor: 'aquamarine',
            height: hourdata.height*100,
            fontSize: '8px'
            }}
            >
                
                </div>
            )

        const tidesResultType = tidesOnly.map((hourdata, index) => 
            <td key={index}>{hourdata.type}</td>
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
                <div style={{display: 'flex'}}>
                    {tidesResultGraphIndex} 
                </div>
                <div style={{display: 'flex'}}>
                    {tidesResultGraph}
                </div>
    
            </div>
        )
    }
    

}