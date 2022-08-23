import React from "react";
import { TableSwellCells } from "./TableSwellCells/TableSwellCells";
import { WindCells } from "./WindCells/WindCells";
import { getHour } from "../../../features/features";
import { SecondarySwellCells } from "./SecondarySwellCells/SecondarySwellCells";

export const ForeCastTableStormGlass = ({hourStart, hourEnd, interval}) => {
    //goal: render a table, independent of data sources
    //idea: render data sources as different components
            //cells for weather data (optional)
            //cells for tide data (optional)
            // cells for 'matches prefered conditions' (optional)

    const firstIndex = hourStart || 0 //hourStart;
    const lastIndex = hourEnd || 23 //hourEnd;
    const source = 'noaa' //later passed as prop (like hourStart);

    let indexArray= [];

    interval = interval || 1;

    for (let x=firstIndex;x<=lastIndex;x=x+interval){
        indexArray.push(x);
    }
    
    const {hour} = getHour();

    const tableRows = indexArray.map((hourly, index) => 
    <tr key={index} className={hourly === hour? 'currentHourRow':''}>
        <td className='tableHour'>{hourly}</td>
        <TableSwellCells hourly={hourly} source={source} />
        <SecondarySwellCells hourly={hourly} source={source} />
        <WindCells hourly={hourly} source={source} />
    </tr>
    )

    return (
        <div className='ForeCastTableHolder'>
        <table className="ForeCastTable">
            <thead>
                <tr>
                    <td className='tableHour'></td>
                    <td>surf</td>
                    <td colSpan="3">Primary swell</td>
                    <td>Secondary swell</td>
                    <td colSpan="4">Wind</td>
                </tr>
            </thead>
            <tbody>
                {tableRows}
           </tbody>
        </table>
    </div>
    )

}
