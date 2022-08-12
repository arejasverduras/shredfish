import {React, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeoLocation } from "../../../components/SpotSelector/SpotSlice";

export const GetCoordinates = () => {
    const dispatch = useDispatch();

    
    //get variables for API call
    const cityName = 'den haag'; //search input


    useEffect(()=>{
        dispatch(getGeoLocation(cityName));
    },[])
    


    return (
        <>

        </>
    )
}