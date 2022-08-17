import {React} from "react";
import { useSelector } from "react-redux";
import { selectWindData, selectWindStatus } from "../../../containers/WindResult/WindSlice";
import windArrow from '../../../up-arrow-wind.svg';
import { getHour, windStrength } from "../../../features/features";

export const CurrentWind = ({source}) => {
    const windStatus = useSelector(selectWindStatus);
    const windData = useSelector(selectWindData);
    
    const {hour } = getHour();

    if (windStatus !== 'succeeded' || windData.hours.length <1) {
        return (
            <div className="current NoCurrentWind">
                <p>No wind data available. Loading wind status: {windStatus}</p>
            </div>
        )
    } else {
    
    const {windSpeed, windDirection, gust} = windData.hours[hour];
    const windSpeedKmh = (windSpeed[source]*3.6).toFixed(0);

    const classNames='current '+windStrength(windSpeedKmh);

    return (
        <div className={classNames}>
            <h3>Wind</h3>
            <img 
                src={windArrow}
                className="windArrow"
                alt="windArrow"
                style={{
                    transform: `rotate(${windDirection[source]}deg)`
                    }}
                />
            
            <p className="highlight currentWindSpeed">{windSpeedKmh}kph</p>
            {/* <p className="directionType">{directionType}</p> */}
            
        </div>
    )
    }
}