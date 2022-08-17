import React from "react";
import { useSelector } from "react-redux";
import { selectWindStatus, selectWindData } from "../../../../containers/WindResult/WindSlice";
import { windStrength } from "../../../../features/features";
import windArrow from '../../../../up-arrow-wind.svg';

export const WindCells = ({hourly, source}) => {
    const windStatus = useSelector(selectWindStatus);
    const windData = useSelector(selectWindData);

    if (windStatus !== 'succeeded' || windData.hours.length < 1){
        return (
            <>
            <td>-</td>
            <td>-</td>
            <td>-</td>


            </>
        )
    } else {
        //destructure windData
        const {windDirection, windSpeed, gust} = windData.hours[hourly];
        const windSpeedKmh = (windSpeed[source]*3.6).toFixed(0);
        const gustKmh = (gust[source]*3.6).toFixed(0);

        //return cells
        return (
            <>
                <td className="tableWindSpeed">{windSpeedKmh}</td>
                <td className="tableWindGusts">{gustKmh}<br/>kph</td>
                <td className={windStrength(windSpeedKmh)}>
                    <img 
                        src={windArrow}
                        className="tableWindArrow"
                        alt="windArrow"
                        style={{
                            transform: `rotate(${windDirection[source]}deg)`
                    }}
                />
                </td>
            </>
        )
    }
}
