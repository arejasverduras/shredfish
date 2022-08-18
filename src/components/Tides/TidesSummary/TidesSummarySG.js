import React from 'react';
import { useSelector } from 'react-redux';
import { selectTidesExtremeStatus, selectTidesExtremeData } from '../../../containers/TidesResult/TidesResultSlice';
import { getHour } from '../../../features/features';

export const TidesSummarySG = () => {
    //props: hourStart / end ? Date

    const tidesStatus = useSelector(selectTidesExtremeStatus);
    const tidesData = useSelector(selectTidesExtremeData);

    const {current, year, month, day, hour, timeNow, dateNow} = getHour();


    console.log(current);
    console.log(year, month, day);

    const daysAhead = 0;
    const wantedDay = day + daysAhead;
    
    const xmonth = (month <= 9?`0${month}`:month);
    const xday = (wantedDay <= 9?`0${wantedDay}`:wantedDay);
   
    const dateString = `${year}-${xmonth}-${xday}`;
    console.log(dateString);



    if (tidesStatus !== 'succeeded' || tidesData.data.length < 1) {
        return (
            <>
                <p>Nada</p>
            </>
        )
    } else {
        let todayXs = tidesData.data.filter(extreme => 
            extreme.time.includes(dateString));
        console.log(todayXs);

        const tideCells = todayXs.map((x, index) => 
            // {const sliced = x.time.slice(11,19)}
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