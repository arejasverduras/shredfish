import React from "react";
import { useSelector } from "react-redux";
import { selectTidesStatus, selectTidesData } from "../TidesResultSlice";
import { getHour } from "../../../features/features";

export const TidesGraph = () => {
    const tidesStatus = useSelector(selectTidesStatus);
    const tidesData = useSelector(selectTidesData);

    const {hour, timeNow} = getHour();

    if (tidesStatus !== 'succeeded') {
        return (
            <div className="NoTidesGraph">
                <p>Graph Loading status : {tidesStatus}</p>
            </div>
        )
    } else {
        //filter the tides array
        const tidesOnly = tidesData.tides.filter((hourdata) => hourdata.type === 'NORMAL');
        console.log(tidesOnly[0].height);


        const tidesResultGraphIndex = tidesOnly.map((hourdata, index) => 
        <div key={index} style={{
            width: '4%', 
            }}>
                {index}
        </div>)
        
        const tidesHeights = tidesOnly.map((tideHeight, index)=> 
        tideHeight.height
        )

        console.log(tidesHeights);
        
        const tidesResultGraph = tidesOnly.map((hourdata, index) => 
        <div key={index} 
            className={hourdata.height <= tidesHeights[index+1]?`tideGoingUp ${index === hour? 'currentTideColumn': 'TideColumn'}` :`tideGoingDown ${index === hour? 'currentTideColumn': 'TideColumn'}`}
            style={{
            height: hourdata.height*75,
            }}>
        </div>
            )

        return (
        <div className="TidesGraph">
     
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