import React from "react";
import { useSelector } from "react-redux";
import { selectTidesStatus, selectTidesData } from "../TidesResultSlice";

export const TidesGraph = () => {
    const tidesStatus = useSelector(selectTidesStatus);
    const tidesData = useSelector(selectTidesData);

    if (tidesStatus !== 'succeeded') {
        return (
            <div className="NoTidesGraph">
                <p>Graph Loading status : {tidesStatus}</p>
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