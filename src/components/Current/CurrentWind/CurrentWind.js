import {React} from "react";
import { useSelector } from "react-redux";
import { selectWindData, selectWindStatus } from "../../WindResult/WindSlice";
import windArrow from '../../../up-arrow-wind.svg';
import { getHour, windStrength } from "../../../features/features";

export const CurrentWind = () => {
    const windStatus = useSelector(selectWindStatus);
    const windData = useSelector(selectWindData);
    
    const {hour, timeNow} = getHour();

    if (windStatus !== 'succeeded') {
        return (
            <div className="current NoCurrentWind">
                <p>No wind data available. Loading wind status: {windStatus}</p>
            </div>
        )
    } else {
    
    const {timestamp, speed, direction, directionType, gust} = windData.wind[hour];

    const classNames='current '+windStrength(speed);

    return (
        <div className={classNames}>
            <h3>Wind</h3>
            <img 
                src={windArrow}
                className="windArrow"
                alt="windArrow"
                style={{
                    transform: `rotate(${direction}deg)`
                    }}
                />
            
            <p className="highlight currentWindSpeed">{speed.toFixed(0)}kph</p>
            <p className="directionType">{directionType}</p>
            
        </div>
    )
    }
}