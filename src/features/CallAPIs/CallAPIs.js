import React from "react";
import { GetWeather } from "../../containers/WeatherResult/GetWeather";
import { GetAllWeather } from "../../containers/WeatherResult/GetAllWeather";
import { TideResult } from "../../containers/TidesResult/TideResult";

import { GetStorm } from "../../containers/GetStorm/GetStorm";

export const CallAPIs = () => {
    return (
        <>
            <GetStorm />
            <GetWeather />
            <TideResult />
            <GetAllWeather />


        </>
    )
}