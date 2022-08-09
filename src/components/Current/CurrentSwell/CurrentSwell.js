import {React} from 'react';
import { useSelector } from 'react-redux';
import { selectForeCast, selectStatus } from '../../../features/ForeCastData/ForeCastDataSlice';
import arrow from '../../../up-arrow-swell.svg'
import { getHour } from '../../../features/features';

export const CurrentSwell = () => {
    const swellStatus = useSelector(selectStatus);
    const swellData = useSelector(selectForeCast);

    const {hour, timeNow} = getHour();

    if (swellStatus !== 'succeeded') {
        return (
            <div className="current NoCurrentSwell">
                <p>No swell data available. Loading swell status: {swellStatus}</p>
            </div>
        )
    } else {
    
    const {min, max, humanRelation } = swellData.wave[hour].surf;
    const {swells} = swellData.wave[hour];

    return (
        <div className="current SurfHeight">
            <h3>Swell</h3>
            <img src={arrow} className="swell-arrow" alt="swell-arrow" style={{
                transform: `rotate(${swells[0].direction}deg)`
                }} />
                <p className="highlight">{min} - {max}m</p>
                <p>{humanRelation}</p>
                <p className='highlight'>{swells[0].period}s</p>
        </div>
    )
    }
}