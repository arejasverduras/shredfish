import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoLocation } from "../../../components/SpotSelector/SpotSlice";

export const GetCoordinates = ({term}) => {
    const dispatch = useDispatch();

    
    //get variables for API call
    const cityName = term; //search input


    useEffect(()=>{
        dispatch(getGeoLocation(cityName));
    },[cityName])
    


    return (
        <>

        </>
    )
}