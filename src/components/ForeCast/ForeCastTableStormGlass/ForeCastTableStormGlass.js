import React from "react";
import { TableSwellCells } from "./TableSwellCells/TableSwellCells";
import { WindCells } from "./WindCells/WindCells";
import { getHour } from "../../../features/features";

export const ForeCastTableStormGlass = ({hourStart, hourEnd}) => {
    //goal: render a table, independent of data sources
    //idea: render data sources as different components
            //cells for weather data (optional)
            //cells for tide data (optional)
            // cells for 'matches prefered conditions' (optional)

    const firstIndex = 0 //hourStart;
    const lastIndex = 23 //hourEnd;
    const source = 'noaa' //later passed as prop (like hourStart);

    let indexArray= [];

    for (let x=firstIndex;x<=lastIndex;x++){
        indexArray.push(x);
    }
    
    const {hour} = getHour();

    const tableRows = indexArray.map((hourly, index) => 
    <tr key={index} className={index === hour? 'currentHourRow':''}>
        <td className='tableHour'>{index}</td>
        <TableSwellCells hourly={hourly} source={source} />
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
