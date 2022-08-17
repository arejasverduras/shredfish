import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { getSwell } from "./StormSlice";
import { getSecondarySwell } from "./StormSlice";
import { getWindData } from "../WindResult/WindSlice";
import { getTidesFromStormGlass } from "../TidesResult/TidesResultSlice";

export const GetStorm = () =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, lon} = currentSpot.data[0];
    const arg = {
        lat: lat,
        lon: lon
    }

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

    useEffect(()=>{
        dispatch(getTidesFromStormGlass(arg));
    },[])
    
    
    return (
    <>
    </>
)


}