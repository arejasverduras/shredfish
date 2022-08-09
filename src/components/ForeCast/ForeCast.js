import React from "react";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { ForeCastResult } from "../forecastResult/ForeCastResult";
import { TideResult } from "../TidesResult/TideResult";
import { WindResult } from "../WindResult/WindResult";
import { WeatherResult } from "../WeatherResult/WeatherResult";

export const ForeCast = ()=>{
    return (
        <div className="ForeCast">
            <SpotSelector />
            <ForeCastResult />
            <TideResult />
            <WindResult />
            <WeatherResult />
        </div>
    )
}