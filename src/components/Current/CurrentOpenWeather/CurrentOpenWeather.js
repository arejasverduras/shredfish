import {React} from "react";
import { useSelector } from "react-redux";
import { selectCurrentWeatherStatus, selectOpenCurrentWeather } from "../../../containers/WeatherResult/OpenWeatherSlice";
import { timestampToTime } from "../../../features/features";

export const CurrentOpenWeather = () => {
    const openCurrentWeatherStatus = useSelector(selectCurrentWeatherStatus);
    const openCurrentWeather = useSelector(selectOpenCurrentWeather);

    if (openCurrentWeatherStatus !== 'succeeded'){
        return (
            <div className="current CurrentWeather">
                <p>Weather status: {openCurrentWeatherStatus}</p>
            </div>
        )
    } else {
    
        // const {temperature, condition} = openCurrentWeather;
        const {weather, name, sys, main, timezone} = openCurrentWeather;
        const {sunrise, sunset} = sys;

        return (
        <>
        <div className="current CurrentWeather">
            {/* <p>{temperature.toFixed(0)}.C | {condition.toLowerCase()}</p> */}
            <p>{name}, {sys.country}: {weather[0].main}, {weather[0].description}. {main.temp.toFixed(0)}.C</p>
        </div>
        <div className="current CurrentWeather">
        {/* <p>{temperature.toFixed(0)}.C | {condition.toLowerCase()}</p> */}
        
        <ul className="CurrentSunLightList">
            <li>Sunrise: {timestampToTime(sunrise)}</li>
            <li>Sunset: {timestampToTime(sunset)}</li>
        </ul>
        </div>
    </>
    )
    }
}