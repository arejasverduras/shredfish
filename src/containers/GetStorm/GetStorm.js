import {React, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { getSwell } from "./StormSlice";
import { getWindData } from "../WindResult/WindSlice";

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

    //gets wind
    useEffect(()=>{
        dispatch(getWindData(arg));
    },[])
    
    return (
    <>
    </>
)


}