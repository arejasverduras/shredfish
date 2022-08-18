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

    const wantedDay = day + 2;
    
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
    }
}