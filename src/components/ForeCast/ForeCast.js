import React from "react";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { ForeCastResult } from "../forecastResult/ForeCastResult";
import { TideResult } from "../TidesResult/TideResult";

export const ForeCast = ()=>{
    return (
        <div className="ForeCast">
            <SpotSelector />
            <ForeCastResult />
            <TideResult />
        </div>
    )
}