import {React} from "react";
import { useSelector } from "react-redux";
import { selectOpenWeatherStatus, selectOpenWeatherData } from "../../../features/OpenWeather/OpenWeatherSlice";

export const CurrentOpenWeather = () => {


    const openWeatherStatus = useSelector(selectOpenWeatherStatus);

    const openCurrentWeather = useSelector(selectOpenWeatherData);

    if (openWeatherStatus !== 'succeeded'){
        return (
            <div className="current CurrentWeather">
                <p>Weather status: {openWeatherStatus}</p>
            </div>
        )
    } else {
    
        // const {temperature, condition} = openCurrentWeather;
        const {weather, name, sys} = openCurrentWeather;
        console.log(openCurrentWeather);

        return (
        <div className="current CurrentWeather">
            {/* <p>{temperature.toFixed(0)}.C | {condition.toLowerCase()}</p> */}
            <p>Weather for {name}, {sys.country}: {weather[0].main}</p>
        </div>
    )
    }
}