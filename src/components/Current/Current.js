import React from "react";
import { CurrentSwell } from "./CurrentSwell/CurrentSwell";
import { CurrentWind} from "./CurrentWind/CurrentWind";

export const Current = () => {
    return (
        <div className="Current">
            <div className="spotBasic"></div>
            <h2 style={{display: 'none'}}>Current</h2>
            <div className="CurrentWrapper">
                <CurrentSwell />
                <CurrentWind />
            </div>
            <div className="spotBasic"></div>
        </div>
    )
}