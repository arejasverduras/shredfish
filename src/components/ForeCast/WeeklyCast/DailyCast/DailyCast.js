import {React, useState} from "react";
import { ForeCastTableStormGlass } from "../../ForeCastTableStormGlass/ForeCastTableStormGlass";
import { Tides } from "../../../Tides/Tides";
import { DailyCastHeader } from "./DailyCastHeader/DailyCastHeader";

export const DailyCast = ({dayNo}) => {
     //interval
     const [interval, setInterval] = useState(6);

    
    if (isNaN(dayNo) || dayNo < 0){
        return (
            <>
                <p>Wrong number of Days</p>
            </>
        )
    }
    
    const hourStart = dayNo*24; // 0*24 = 0 // 1*24 = 24
    const hourEnd = ((dayNo+1)*24); // 0+1=1, 1*24=24, 24-1 = 23 // 1+1 = 2, 2*24=48, 48-1 = 47

   

    return (
        <div className="DailyCast">
            <DailyCastHeader
                dayNo={dayNo} 
            />
            <button onClick={()=>{setInterval(1)}}>hourly</button>
            <button onClick={()=>{setInterval(3)}}>3-hourly</button>
            <button onClick={()=>{setInterval(6)}}>6-hourly</button>

            <ForeCastTableStormGlass
                hourStart={hourStart}
                hourEnd={hourEnd}
                interval={interval} 
            />
            <Tides
                hourStart={hourStart}
                hourEnd={hourEnd}
                dayNo={dayNo}     
            />
        </div>
    )
}