import React from "react";
import { SpotLoader } from "../SpotLoader/SpotLoader";
import { SpotSelector } from "../SpotSelector/SpotSelector";
import { GetCoordinates } from "../../features/OpenWeather/SpotSearch/getCoordinates";
import { ForeCast } from "../ForeCast/ForeCast";
import { SpotSearchResult } from "../SpotLoader/SpotSearchResult/SpotSearchResult";

export const SurfForeCast = () => {
    return (
        <div className="SurfForeCast">
            <div className="SpotHeader">
                <SpotLoader />
                <SpotSearchResult />
                <SpotSelector />
                <GetCoordinates />
            </div>
        <ForeCast />
        </div>
    )
}
