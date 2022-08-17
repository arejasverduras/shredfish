import React from "react";
import { useSelector } from "react-redux";
import { selectStormStatus, selectStormData } from "../../../../containers/GetStorm/StormSlice";
import swellArrow from '../../../../up-arrow-swell.svg';

export const TableSwellCells = ({hourly, source}) => {
    const swellStatus = useSelector(selectStormStatus);
    const swellData = useSelector(selectStormData);

    if (swellStatus !== 'succeeded' || swellData.hours.length < 1){
        return (
            <>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>

            </>
        )
    } else {    
        const {swellHeight, waveHeight, swellPeriod, swellDirection} = swellData.hours[hourly];

    return (
        <>
            {/* Surf */}
            <td className="tableSurf">
                {swellHeight[source].toFixed(1)}-
                {waveHeight[source].toFixed(1)}m
            </td>

            {/* primary swell */}
            <td className="primary pSwell">{swellHeight[source].toFixed(1)}m</td>
            <td className="primary pPeriod"><b>{swellPeriod[source].toFixed(0)}s</b></td>
            <td className="primary pDirection">
            <img src={swellArrow} className="swell-arrow" alt="swell-arrow" 
                style={{
                transform: `rotate(${swellDirection[source]}deg)`
                }} />
            </td>
        </>
    )
    }
}