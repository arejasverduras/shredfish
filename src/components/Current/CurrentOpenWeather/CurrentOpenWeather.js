import {React} from "react";
import { useSelector } from "react-redux";
import { selectCurrentWeatherStatus, selectOpenCurrentWeather } from "../../../containers/WeatherResult/OpenWeatherSlice";

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
        const {weather, name, sys, main} = openCurrentWeather;
        console.log(openCurrentWeather);

        return (
        <div className="current CurrentWeather">
            {/* <p>{temperature.toFixed(0)}.C | {condition.toLowerCase()}</p> */}
            <p>{name}, {sys.country}: {weather[0].main}. {main.temp.toFixed(0)}.C</p>
        </div>
    )
    }
}