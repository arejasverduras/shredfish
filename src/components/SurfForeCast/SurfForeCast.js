import React from "react";
import { SpotLoader } from "../SpotLoader/SpotLoader";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { GetCoordinates } from "../../features/OpenWeather/SpotSearch/getCoordinates";
import { ForeCast } from "../ForeCast/ForeCast";

export const SurfForeCast = () => {
    return (
        <div className="SurfForeCast">
        <SpotLoader />
        <SpotSelector />
        <GetCoordinates />
        <ForeCast />
        </div>
    )
}
