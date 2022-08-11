import React from "react";
import { CurrentSwell } from "./CurrentSwell/CurrentSwell";
import { CurrentWind} from "./CurrentWind/CurrentWind";
import { CurrentTide } from "./CurrentTide/CurrentTide";
import { CurrentWeather } from "./CurrentWeather/CurrentWeather";

export const Current = () => {
    return (
        <div className="Current">
            <div className="spotBasic"></div>
            <h2 style={{display: 'none'}}>Current</h2>
            <div className="CurrentWrapper">
                <CurrentWeather />
                <CurrentSwell />
                <CurrentWind />
                <CurrentTide />
            </div>
            <div className="spotBasic"></div>
        </div>
    )
}