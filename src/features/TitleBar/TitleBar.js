// import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";

export const TitleBar = () => {
    const currentSpot = useSelector(selectCurrentSpot);

    const spotName = currentSpot.data[0]? currentSpot.data[0].name: '';
  
    return `<title>ShredFish - Surf Forecast for ${spotName}</title>`
}