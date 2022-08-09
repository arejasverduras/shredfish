import React from "react";
import { CurrentSwell } from "./CurrentSwell/CurrentSwell";
import { CurrentWind} from "./CurrentWind/CurrentWind";

export const Current = () => {
    return (
        <div className="Current">
            <CurrentSwell />
            <CurrentWind />
        </div>
    )
}