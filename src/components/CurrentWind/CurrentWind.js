import {React} from "react";
import { useSelector } from "react-redux";
import { selectWindData, selectWindStatus } from "../WindResult/WindSlice";
import windArrow from '../../up-arrow-wind.svg';
import { getHour } from "../../features/features";

export const CurrentWind = () => {
    const windStatus = useSelector(selectWindStatus);
    const windData = useSelector(selectWindData);
    
    const {hour, timeNow} = getHour();

    if (windStatus !== 'succeeded') {
        return (
            <div className="NoCurrentWind">
                <p>No wind data available. Loading wind: {windStatus}</p>
            </div>
        )
    } else {
    
    const {timestamp, speed, direction, directionType, gust} = windData.wind[hour];

    
    return (
        <div className="current">
            <h3>Wind</h3>
            <img 
                src={windArrow}
                className="windArrow"
                alt="windArrow"
                style={{
                    transform: `rotate(${direction}deg)`
                    }}
                />
            <p className="directionType">{directionType}</p>
            <p className="currentWindSpeed">{speed.toFixed(0)}kph</p>
            
        </div>
    )
    }
}