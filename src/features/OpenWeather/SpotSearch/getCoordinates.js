import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm } from "../../../components/SpotSelector/SpotSlice";
import { getGeoLocation } from "../../../components/SpotSelector/SpotSlice";


export const GetCoordinates = ({term}) => {
    const dispatch = useDispatch();
    
    //get variables for API call
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(()=>{
        dispatch(getGeoLocation(searchTerm));
    },[searchTerm])
    
}