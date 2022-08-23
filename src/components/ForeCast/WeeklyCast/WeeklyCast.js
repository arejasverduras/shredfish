// will generate a 'DailyCast component for X days
//each daily cast contains
    // forecast table
    //tidestable
    //tidesSummary
    //additionalData
        //sunset, sunrise
        //watertemp
        // weather

//DailyCast will be given a DayNo prop (number of the day requested for tidesSummary, zero-indexed)

//Now, a fixed number of days will be given to load. Components themselvels check if they have sufficient data. 
//Later, the number of days will be generated based on:
    // availability of data
    //requested by the user
    //subscription type (premium, basic)
import {React, useState }from "react";
import { DailyCast } from "./DailyCast/DailyCast";

export const WeeklyCast = () => {
//input a number of days
const [numberOfDays, setNumberOfDays] = useState(7);

//generate dailycast times the number of days
//dailycast will set the correct hourindexes

let daysArray= [];

for (let x=0;x<numberOfDays;x++){
    daysArray.push(x);
}

const dailyCastList = daysArray.map((day, index)=>
    <DailyCast 
        dayNo={index}
        key={index}
    />
)
    return (
        <div className="WeeklyCast">
            <div className="selectForeCastDays">
                <button onClick={()=>{setNumberOfDays(3)}}>3-day Forecast</button>
                <button onClick={()=>{setNumberOfDays(7)}}>7-day Forecast</button>
                <button onClick={()=>{setNumberOfDays(10)}}>10-day Forecast</button>
            </div>
            {dailyCastList}
        </div>
    )
}