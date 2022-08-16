import React from "react";
import { GetWeather } from "../OpenWeather/GetWeather";
import { ForeCastResult } from "../../components/forecastResult/ForeCastResult";
import { TideResult } from "../../containers/TidesResult/TideResult";
import { WindResult } from "../../components/WindResult/WindResult";

export const CallAPIs = () => {
    return (
        <>
            <GetWeather />
            <ForeCastResult />
            <TideResult />
            <WindResult />
        </>
    )
}