import React from 'react';
import { useSelector } from 'react-redux';
import { selectTidesExtremeStatus, selectTidesExtremeData } from '../../../containers/TidesResult/TidesResultSlice';
import { getHour } from '../../../features/features';

export const TidesSummarySG = ({dayNo, timeDifference}) => {
    //props: hourStart / end ? Date

    const tidesStatus = useSelector(selectTidesExtremeStatus);
    const tidesData = useSelector(selectTidesExtremeData);

    const {year, month, day} = getHour();

    const daysAhead = dayNo || 0;
    const wantedDay = day + daysAhead;
    
    const xmonth = (month <= 9?`0${month}`:month);
    const xday = (wantedDay <= 9?`0${wantedDay}`:wantedDay);
   
    const dateString = `${year}-${xmonth}-${xday}`;

    if (tidesStatus !== 'succeeded' || tidesData.data.length < 1) {
        return (
            <>
                <p>Tide summary not able to load</p>
            </>
        )
    } else {
        let todayXs = tidesData.data.filter(extreme => 
            extreme.time.includes(dateString));

        const toLocalTime = (UTCdate) =>{
            const localDate = new Date (UTCdate);

            const localHours = localDate.getHours();
            const localMinutes = localDate.getMinutes();
            const minutes = localMinutes < 10? '0'+localMinutes : localMinutes;
            const localTime = `${localHours}:${minutes}`;
            return localTime;
        }

        const tideCells = todayXs.map((x, index) => 
            <td key={index}>
                {x.type.toUpperCase()}: {toLocalTime(x.time)}
            </td>
        )

        return (
            <div className="TidesSummary">
            <table>
                <tbody>
                    <tr>
                        {tideCells}
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}