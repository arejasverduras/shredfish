import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentWeather, selectCurrentWeather, selectWeatherData, selectWeatherStatus } from "../../WeatherResult/WeatherSlice";
import { getHour } from "../../../features/features";

export const CurrentWeather = () => {
    const dispatch = useDispatch();
    const {hour} = getHour();

    const weatherStatus = useSelector(selectWeatherStatus);
    const weatherData = useSelector(selectWeatherData);
    
    let currentWeatherObject = {
        temp: 'what',
        condition: 'dude'
    }

    // useEffect(dispatch(setCurrentWeather(currentWeatherObject)),[weatherData]);

    if (weatherStatus !== 'succeeded'){
        return (
            <>
            </>
        )
    } else {
    
    const {temperature, condition} = weatherData.weather[hour];

        return (
        <div className="current CurentWeather">
            <p>{temperature.toFixed(0)} degrees Celsius</p>
            <p>{condition.toLowerCase()}</p>
        </div>
    )
    }
}