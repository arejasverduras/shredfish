import React from "react";

export const YouTube = ({embedId}) => {
    const baseUrl = "https://www.youtube.com/embed/"
    const returnUrl = baseUrl+embedId;
    return (
        
            <iframe 
                className="youTube"
                width="1120" 
                height="600" 
                src={returnUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>

    )
};
