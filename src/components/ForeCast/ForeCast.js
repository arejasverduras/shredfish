import React from "react";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { ForeCastResult } from "../forecastResult/ForeCastResult";

export const ForeCast = ()=>{
    return (
        <div className="ForeCast">
            <SpotSelector />
            <ForeCastResult />
        </div>
    )
}