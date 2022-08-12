import {React, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { getOpenWeatherData } from "./OpenWeatherSlice";

export const GetWeather =() =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, long} = currentSpot.data;
    const arg = {
        lat: lat,
        long: long
    }


    useEffect(()=>{
        dispatch(getOpenWeatherData(arg));
    },[])
    
    return (
    <>
    </>
)


}