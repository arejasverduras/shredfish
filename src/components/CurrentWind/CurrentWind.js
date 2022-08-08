import {React} from "react";
import { useSelector } from "react-redux";
import { selectWindData, selectWindStatus } from "../WindResult/WindSlice";
import windArrow from '../../up-arrow-wind.svg';
import { getHour } from "../../features/features";

export const CurrentWind = () => {
    const windStatus = useSelector(selectWindStatus);
    const windData = useSelector(selectWindData);
    
    if (windStatus !== 'succeeded') {
        return (
            <div className="NoCurrentWind">
                <p>No wind data available. Loading wind: {windStatus}</p>
            </div>
        )
    } else {
    
    const {hour, timeNow} = getHour();
    

    return (
        <div className="CurrentWind">
            <img 
                src={windArrow}
                alt="windArrow"
                style={{
                    transform: `rotate(${windData.wind[hour].direction}deg)`
                    }}
                />
            {/* based on timestamp / hour */}
            {/* arrow */}
            {/* speed */}
            {/* direction */}
            {/* direction Type */}
        </div>
    )
    }
}