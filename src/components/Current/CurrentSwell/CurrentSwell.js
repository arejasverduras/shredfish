import {React} from 'react';
import { useSelector } from 'react-redux';
import { selectStormStatus, selectStormData } from '../../../containers/GetStorm/StormSlice';
import arrow from '../../../up-arrow-swell.svg'
import { getHour } from '../../../features/features';

export const CurrentSwell = ({source}) => {
    const swellStatus = useSelector(selectStormStatus);
    const swellData = useSelector(selectStormData);

    const {hour} = getHour();

    if (swellStatus !== 'succeeded' || swellData.hours.length <1) {
        return (
            <div className="current NoCurrentSwell">
                <p>No swell data available. Loading swell status: {swellStatus}</p>
            </div>
        )
    } else {
    
    const {swellHeight, waveHeight, swellPeriod, swellDirection} = swellData.hours[hour];

    return (
        <div className="current SurfHeight">
            <h3>Swell</h3>
            <img src={arrow} className="swell-arrow" alt="swell-arrow" style={{
                transform: `rotate(${swellDirection[source]}deg)`
                }} />
                <p className="highlight">{swellHeight[source].toFixed(1)}-
                {waveHeight[source].toFixed(1)}m</p>
                <p className='highlight'>{swellPeriod[source].toFixed(0)}s</p>
        </div>
    )
    }
}