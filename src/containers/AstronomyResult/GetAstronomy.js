import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { getAstronomy } from "../AstronomyResult/AstronomySlice";
import { getHour } from "../../features/features";

import dateFormat, { masks } from "dateformat";

export const GetAstronomy = () =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, lon} = currentSpot.data[0];

    //get start argument : today, at 00:00
    const {current} = getHour();
    const dateOnly = dateFormat(current, "yyyy-mm-dd");
    const startHour = '00:00:00';

    const start = `${dateOnly}T${startHour}`;

    const arg = {
        lat: lat,
        lon: lon,
        start: start
    }

    //getAstronomy
    useEffect(()=>{
        dispatch(getAstronomy(arg));
    },[])
    
    return (
    <>
    </>
)


}