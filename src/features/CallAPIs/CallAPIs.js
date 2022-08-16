import React from "react";
import { GetWeather } from "../../containers/WeatherResult/GetWeather";
import { GetAllWeather } from "../../containers/WeatherResult/GetAllWeather";
import { ForeCastResult } from "../../containers/ForeCastResult/ForeCastResult";
import { TideResult } from "../../containers/TidesResult/TideResult";
import { WindResult } from "../../containers/WindResult/WindResult";

export const CallAPIs = () => {
    return (
        <>
            <GetWeather />
            <ForeCastResult />
            <TideResult />
            <WindResult />
            <GetAllWeather />
        </>
    )
}