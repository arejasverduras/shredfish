import React from "react";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { ForeCastResult } from "../forecastResult/ForeCastResult";
import { TideResult } from "../TidesResult/TideResult";
import { WindResult } from "../WindResult/WindResult";

export const ForeCast = ()=>{
    return (
        <div className="ForeCast">
            <SpotSelector />
            <ForeCastResult />
            <TideResult />
            <WindResult />
        </div>
    )
}