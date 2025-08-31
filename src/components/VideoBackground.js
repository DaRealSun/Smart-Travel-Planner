
import React from "react";
import {useSelector} from "react-redux";
import useYouTubeTravelVideo from "../hooks/useYouTubeTrailerTravelVideo";

const VideoBackground = () => {
    const youTubeVideo = useSelector((store) => store.video?.youTubeVideo);
    useYouTubeTravelVideo();
    return (
        <div className="w-screen">
            {youTubeVideo && (
                <iframe
                    tabIndex="-1"
                    className="absolute top-0 left-0 w-screen h-full -z-50"
                    src={`https://www.youtube.com/embed/${youTubeVideo}?autoplay=1&mute=1&loop=1&playlist=${youTubeVideo}&start=18&controls=0&modestbranding=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    style={{
                        width: "100vw",
                        height: "56.25vw",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        objectFit: "cover",
                        pointerEvents: "none",
                    }}
                />
            )}
        </div>
    );
};

export default VideoBackground;
