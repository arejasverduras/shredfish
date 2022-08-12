import React from "react";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { ForeCastResult } from "../forecastResult/ForeCastResult";
import { TideResult } from "../TidesResult/TideResult";
import { WindResult } from "../WindResult/WindResult";
import { WeatherResult } from "../WeatherResult/WeatherResult";
import { GetCoordinates } from "../../features/OpenWeather/SpotSearch/getCoordinates";
import { GetCoordinatesResult } from "../../features/OpenWeather/SpotSearch/GetCoordsResult";

export const ForeCast = ()=>{
    return (
        <div className="ForeCast">
            <SpotSelector />
            <GetCoordinates />
            <GetCoordinatesResult />
            
            <ForeCastResult />
            <TideResult />
            <WindResult />
            <WeatherResult />
        </div>
    )
}