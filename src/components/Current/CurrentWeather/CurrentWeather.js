import {React} from "react";
import { useSelector } from "react-redux";
import { selectCurrentWeather, selectWeatherStatus } from "../../WeatherResult/WeatherSlice";


export const CurrentWeather = () => {


    const weatherStatus = useSelector(selectWeatherStatus);

    const currentWeather = useSelector(selectCurrentWeather);

    if (weatherStatus !== 'succeeded'){
        return (
            <div className="current CurrentWeather">
                <p>Weather status: {weatherStatus}</p>
            </div>
        )
    } else {
    
        const {temperature, condition} = currentWeather;

        return (
        <div className="current CurrentWeather">
            <p>{temperature.toFixed(0)}.C | {condition.toLowerCase()}</p>
        </div>
    )
    }
}