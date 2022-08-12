import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoLocation, selectCurrentSpot } from "../../../components/SpotSelector/SpotSlice";
import { GetWeather } from "../GetWeather";

export const GetCoordinates = ({term}) => {
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);
    
    //get variables for API call
    const cityName = term; //search input


    useEffect(()=>{
        dispatch(getGeoLocation(cityName));
    },[cityName])
    
}