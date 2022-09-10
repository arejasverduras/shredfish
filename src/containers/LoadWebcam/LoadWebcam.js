import {React, useEffect} from "react";
import { useSelector } from "react-redux";
import { selectWebcamSpots } from "../../components/Webcam/WebcamSlice";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { YouTube } from "../../components/Webcam/YouTube";

export const LoadWebcam = () => {
    const currentSpot = useSelector(selectCurrentSpot);
    const webcamSpots = useSelector(selectWebcamSpots);

    let embedId = null;
    let webcamType;

    if (currentSpot.data[0]){
        const {name, country, lat, lon} = currentSpot.data[0];
 
        const foundWebcam = webcamSpots.filter((webcam) => 
         name === webcam.city && country === webcam.country
        )
        console.log(foundWebcam);
        
        if (foundWebcam.length <1){
            return
        }

        webcamType = foundWebcam[0].type;
        embedId = foundWebcam[0].url;
     }


    const hartBeach = 'KtqXsU-e9zc';
    // embedId = hartBeach;

    if (embedId === null){
        return
    } else {

    return (
        <div className="LoadWebcam">
            <YouTube embedId={embedId} />
      </div>
    )
    }
};
