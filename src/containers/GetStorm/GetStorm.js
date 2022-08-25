import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot, selectTimezoneDifference } from "../../components/SpotSelector/SpotSlice";
import { getSwell } from "./StormSlice";
import { getSecondarySwell } from "./StormSlice";
import { getWindData } from "../WindResult/WindSlice";
import { getTidesExtremes, getTidesFromStormGlass } from "../TidesResult/TidesResultSlice";
import dateFormat, {masks} from "dateformat";

export const GetStorm = () =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, lon} = currentSpot.data[0];

    //get start argument today, compensated with time difference (yesterday minus + hours)
    const timeDiff = useSelector(selectTimezoneDifference);

    const getPreviousDay = (date = new Date()) => {
        const previous = new Date(date.getTime());
        previous.setDate(date.getDate() - 1);
    
        return previous;
  }
    const yesterday = getPreviousDay();

    //format correctly for request, substracts time difference
    const dateOnly = dateFormat(yesterday, "yyyy-mm-dd");
    const hourMinTimeDiff = 24-timeDiff;
    const startHour = `${hourMinTimeDiff}:00:00`;

    const start = `&start=${dateOnly}T${startHour}`;

    const arg = {
        lat: lat,
        lon: lon,
        start: start
    }

    
    //gets Swell
    useEffect(()=>{
        dispatch(getSwell(arg));
    },[])

    // gets secondary swell
    useEffect(()=>{
        dispatch(getSecondarySwell(arg));
    },[])


    //gets wind
    useEffect(()=>{
        dispatch(getWindData(arg));
    },[])

    //getTides
    useEffect(()=>{
        dispatch(getTidesFromStormGlass(arg));
    },[])

    //getTidesExtremes
    useEffect(()=>{
        dispatch(getTidesExtremes(arg));
    },[])
    
    
    return (
    <>
    </>
)


}