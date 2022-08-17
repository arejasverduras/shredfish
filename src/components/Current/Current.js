import React from "react";
import { CurrentSwell } from "./CurrentSwell/CurrentSwell";
import { CurrentWind} from "./CurrentWind/CurrentWind";
import { CurrentTide } from "./CurrentTide/CurrentTide";
import { CurrentOpenWeather } from "./CurrentOpenWeather/CurrentOpenWeather";
import { CurrentWindOW } from "./CurrentWind/CurrentWindOW";

export const Current = () => {
    const source = 'noaa';
    
    return (
        <div className="Current">
            <div className="spotBasic"></div>
            <h2 style={{display: 'none'}}>Current</h2>
            
            <div className="CurrentWrapper">
                <CurrentOpenWeather />
                <CurrentSwell source={source} />
                {/* <CurrentWind /> */}
                <CurrentWind source={source} />
                <CurrentTide />
            </div>
            <div className="spotBasic"></div>
        </div>
    )
}