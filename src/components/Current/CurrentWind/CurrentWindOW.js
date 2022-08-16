import {React} from "react";
import { useSelector } from "react-redux";
import { selectCurrentWeatherStatus, selectOpenCurrentWeather } from "../../../containers/WeatherResult/OpenWeatherSlice";
import windArrow from '../../../up-arrow-wind.svg';
import { windStrength } from "../../../features/features";

export const CurrentWindOW = () => {
    const openCurrentWeatherStatus = useSelector(selectCurrentWeatherStatus);
    const openCurrentWeather = useSelector(selectOpenCurrentWeather);

    if (openCurrentWeatherStatus !== 'succeeded') {
        return (
            <div className="current NoCurrentWind">
                <p>No wind data available. Loading wind status: {openCurrentWeatherStatus}</p>
            </div>
        )
    } else {
    
    const {speed, deg} = openCurrentWeather.wind;
    const speedInKm = speed*3.6;

    const classNames='current '+windStrength(speedInKm);

    return (
        <div className={classNames}>
            <h3>Wind</h3>
            <img 
                src={windArrow}
                className="windArrow"
                alt="windArrow"
                style={{
                    transform: `rotate(${deg}deg)`
                    }}
                />
            
            <p className="highlight currentWindSpeed">{speedInKm.toFixed(0)}kph</p>
            {/* <p className="directionType">{directionType}</p> */}
            
        </div>
    )
    }
}