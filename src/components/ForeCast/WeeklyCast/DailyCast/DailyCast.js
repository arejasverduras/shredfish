import React from "react";
import { ForeCastTableStormGlass } from "../../ForeCastTableStormGlass/ForeCastTableStormGlass";
import { Tides } from "../../../Tides/Tides";
import { DailyCastHeader } from "./DailyCastHeader/DailyCastHeader";

export const DailyCast = ({dayNo}) => {
    if (isNaN(dayNo) || dayNo < 0){
        return (
            <>
                <p>Wrong number of Days</p>
            </>
        )
    }
    
    let hourStart;
    let hourEnd;
    
    let firstIndex = dayNo*24; // 0*24 = 0 // 1*24 = 24
    let lastIndex = ((dayNo+1)*24)-1; // 0+1=1, 1*24=24, 24-1 = 23 // 1+1 = 2, 2*24=48, 48-1 = 47

    hourStart = firstIndex;
    hourEnd = lastIndex;

    // 0 = 0,23
    // 1 = 24,47
    // 2 = 48, 71,
    // 3 = 72, 95,
    // 4 = 96, 119

    return (
        <div className="DailyCast">
            <DailyCastHeader
                dayNo={dayNo} 
            />

            <ForeCastTableStormGlass
                hourStart={hourStart}
                hourEnd={hourEnd} 
            />
            <Tides
                hourStart={hourStart}
                hourEnd={hourEnd}
                dayNo={dayNo}     
            />
        </div>
    )
}