import React from "react";
import { GetWeather } from "../../containers/WeatherResult/GetWeather";
import { GetAllWeather } from "../../containers/WeatherResult/GetAllWeather";
import { GetStorm } from "../../containers/GetStorm/GetStorm";
import { GetAstronomy } from "../../containers/AstronomyResult/GetAstronomy";


export const CallAPIs = () => {
    
    return (
        <>
            <GetStorm />
            <GetAstronomy />
            <GetWeather />
            <GetAllWeather />
        </>
    )
}