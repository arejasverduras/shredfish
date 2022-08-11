import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoLocation, selectCurrentSpot } from "../../../components/SpotSelector/SpotSlice";

export const GetCoordinates = () => {
    const dispatch = useDispatch();
    
    //get variables for API call
    const cityName = 'Den Haag'; //seach input


    useEffect(()=>{
        dispatch(getGeoLocation(cityName));
    },[cityName])
    
    return (
        <>
        </>
    )
}