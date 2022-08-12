import {React, useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";

export const GetWeather =() =>{
    const dispatch = useDispatch();
    const currentSpot = useSelector(selectCurrentSpot);

     //get variables for API call
    const {lat, long} = currentSpot.data;


    useEffect(()=>{
        dispatch(getGeoLocation(cityName));
    },[])
    
    return (
    <>
    </>
)


}