import React from "react";
import { useSelector } from "react-redux";
import { selectTidesStatusSG, selectTidesDataSG } from "../../../containers/TidesResult/TidesResultSlice";
import { getHour } from "../../../features/features";

export const TidesGraphSG = ({hourStart, hourEnd, dayNo, timeDifference}) => {
    const tidesStatus = useSelector(selectTidesStatusSG);
    const tidesData = useSelector(selectTidesDataSG);

    const {hour} = getHour();

    const firstIndex = hourStart|| 0;
    const lastIndex = hourEnd+timeDifference || 23 //hourEnd;

    let indexArray= [];

    for (let x=firstIndex;x<=lastIndex;x++){
        indexArray.push(x);
    }

    let tidesResultGraphIndex = [];

    if (tidesStatus !== 'succeeded' || !tidesData.data.hasOwnProperty(lastIndex)) {
        return (
            <div className="NoTidesGraph">
                <p>Graph Loading status : {tidesStatus}</p>
            </div>
        )
    } else {
        tidesResultGraphIndex = indexArray.map((hourdata, index) => 
        <div key={index} style={{
            width: '4.16%', 
            }}>
                {index}
        </div>)

        // map a new array with tidesHeight based on requested indexes with firstIndex, lastIndex
        // const tidesHeights = tidesData.data.map((tideHeight, index )=> 
        // index < 24?tideHeight.sg:''
        // )
        let tidesHeights = [];    
        for (let x=firstIndex;x<=lastIndex;x++){
            tidesHeights.push(tidesData.data[x].sg)
        }

        const tidesResultGraph = tidesHeights.map((hourdata, index) =>   
            <div key={index} 
                className={hourdata <= tidesHeights[index+1]?`tideGoingUp ${index === hour && dayNo ===0? 'currentTideColumn': 'TideColumn'}` :`tideGoingDown ${index === hour? 'currentTideColumn': 'TideColumn'}`}
                style={{
                height: (hourdata+5)*30,
                }}
                title={hourdata}>
                    <p className="TideColumnDesc" 
                        style={{
                        fontSize: '0.6em',
                        transform: 'translateY(-25px)'
                    }}>{hourdata.toFixed(1)}</p>
            </div>
            )
    

return (
    <div className="TidesGraph">
        <h3>Tide</h3>
        <div className="TidesGraphColumns">
            {tidesResultGraph}
        </div>
        <div className="TidesGraphIndex">
            {tidesResultGraphIndex} 
        </div>
    </div>
        
    )
    }
}