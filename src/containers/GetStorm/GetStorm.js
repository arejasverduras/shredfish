import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { getSwell } from "./StormSlice";
import { getSecondarySwell } from "./StormSlice";
import { getWindData } from "../WindResult/WindSlice";
import { getTidesExtremes, getTidesFromStormGlass } from "../TidesResult/TidesResultSlice";

export const GetStorm = () =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, lon} = currentSpot.data[0];
    const arg = {
        lat: lat,
        lon: lon
    }

    
    //get dates for tidesExtremes


    // const argTidesExtremes = {
    //     late: lat,
    //     lon: lon,
    //     start: start,
    //     end: end
    // }

    //gets Swell
    useEffect(()=>{
        dispatch(getSwell(arg));
    },[])

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