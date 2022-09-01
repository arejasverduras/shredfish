import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../../../../SpotSelector/SpotSlice";


export const DailyCastHeader = ({dayNo}) => {
    const currentSpot = useSelector(selectCurrentSpot);

    const spotName = currentSpot.data[0]? currentSpot.data[0].name : 'Spot not found';

    const date = new Date();
    date.setDate(date.getDate() + dayNo);

    const dateNow = date.toLocaleDateString();
    const weekDayNumber = date.getDay();

    let weekDay;

    switch (weekDayNumber) {
        case 0:
            weekDay = 'sunday';
            break;
        case 1:
                weekDay = 'monday';
                break;
        case 2:
            weekDay = 'tuesday';
            break;
        case 3:
            weekDay = 'wednesday';
            break;
        case 4:
            weekDay = 'thursday'
            break;  
        case 5:
            weekDay = 'friday'
            break;  
        case 6:
            weekDay = 'saturday'
            break;  
          
        default:
            weekDay='what'
            break;
    }
    
    return (
        <div className="DailyCastHeader">
            <p>{weekDay}</p>
            <p>{dateNow}</p>
            <p>Surf Forecast for {spotName}</p>       
        </div>
    )
}