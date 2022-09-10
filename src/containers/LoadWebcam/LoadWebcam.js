import React from "react";
import { useSelector } from "react-redux";
import { selectWebcamSpots } from "../../components/Webcam/WebcamSlice";
import YoutubeEmbed from "../../components/Webcam/YouTube";

export const LoadWebcam = () => {
    const hartBeach = 'KtqXsU-e9zc';
    const embedId = hartBeach;

    return (
        <div className="LoadWebcam">
            <YoutubeEmbed embedId={embedId} />
      </div>
    )
};
