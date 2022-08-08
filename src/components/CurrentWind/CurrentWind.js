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

    const windStrength = () => {
        let strength;
        if (speed <=10){
            strength="lowWind"
        }  else if (speed >10 && speed <=20){
            strength="moderateWind"
        } else if (speed >20 && speed <=30){
            strength="strongWind"
        } else if (speed >30 && speed <=45){
            strength="stormWind"
        }else {
            strength="outOfBounds"
        }
        return 'current '+strength;
    }

    return (
        <div className={windStrength()}>
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