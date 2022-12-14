import {React} from "react";
import { useSelector } from "react-redux";
import { selectWebcamSpots } from "../../components/Webcam/WebcamSlice";
import { selectCurrentSpot } from "../../components/SpotSelector/SpotSlice";
import { YouTube } from "../../components/Webcam/YouTube";

export const LoadWebcam = () => {
    const currentSpot = useSelector(selectCurrentSpot);
    const webcamSpots = useSelector(selectWebcamSpots);

    let embedId = null;
    // let webcamType;
    let webcamArray;

    if (currentSpot.data[0]){
        const {name, country, lat, lon} = currentSpot.data[0];
 
        const foundWebcams = webcamSpots.filter((webcam) => 
         name === webcam.city && country === webcam.country
        )
        
        if (foundWebcams.length <1){
            return
        }

        webcamArray = foundWebcams.map((foundCam, index) =>
            index === 0? 
            <div className="LoadWebcam1" key={index}>
                <YouTube embedId={foundCam.url} />
            </div> : 
              <div className="LoadWebcam" key={index}>
              <YouTube embedId={foundCam.url} />
          </div>
        )

        // webcamType = foundWebcams[0].type;
        embedId = foundWebcams[0].url;
     }

    if (embedId === null){
        return
    } else {
    
    return (
        
        <div className="webcamList">
            {webcamArray}
        </div>
    )
    }
};
