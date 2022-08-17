import React from "react";
import { useSelector } from "react-redux";
import { selectSecondarySwellData, selectSecondarySwellStatus } from "../../../../containers/GetStorm/StormSlice";
import swellArrow from '../../../../up-arrow-swell.svg';

export const SecondarySwellCells = ({hourly, source}) => {
    const swellStatus = useSelector(selectSecondarySwellStatus);
    const swellData = useSelector(selectSecondarySwellData);

    if (swellStatus !== 'succeeded' || swellData.hours.length < 1){
        return (
            <>
            <td>-</td>
            </>
        )
    } else {    
        const {secondarySwellDirection, secondarySwellHeight, secondarySwellPeriod} = swellData.hours[hourly];

    return (
        <>  
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