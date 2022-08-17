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
        const {secondarySwellDirection, secondarySwellHeight, secondarySwellPeriod} = swellData.hours[hourly];

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
            
            {/* secondary swell */}
            <td className={secondarySwellHeight[source].toFixed(1)<= 0.09?'':'secondarySwell'}>
                {secondarySwellHeight[source].toFixed(1)<= 0.09? '':secondarySwellHeight[source].toFixed(1)+'m '+secondarySwellPeriod[source].toFixed(0)+'s '}
                {secondarySwellHeight[source].toFixed(1)<= 0.09? '':
                (
                    <img src={swellArrow} className="swell-arrow" alt="swell-arrow" 
                    style={{
                    transform: `rotate(${secondarySwellDirection[source]}deg)`
                    }} />
                )}
            </td>
        </>
    )
    }
}