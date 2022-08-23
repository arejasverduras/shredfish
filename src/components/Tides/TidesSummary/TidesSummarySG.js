import React from 'react';
import { useSelector } from 'react-redux';
import { selectTidesExtremeStatus, selectTidesExtremeData } from '../../../containers/TidesResult/TidesResultSlice';
import { getHour } from '../../../features/features';

export const TidesSummarySG = ({dayNo}) => {
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
                <p>Nada</p>
            </>
        )
    } else {
        let todayXs = tidesData.data.filter(extreme => 
            extreme.time.includes(dateString));

        const tideCells = todayXs.map((x, index) => 
            <td key={index}>
                {x.type.toUpperCase()}: {x.time.slice(11,16)}
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