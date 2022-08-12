import {React, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { getOpenWeatherData } from "./OpenWeatherSlice";

export const GetWeather =() =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, lon} = currentSpot.data[0];
    const arg = {
        lat: lat,
        lon: lon
    }


    useEffect(()=>{
        dispatch(getOpenWeatherData(arg));
    },[])
    
    return (
    <>
    </>
)


}