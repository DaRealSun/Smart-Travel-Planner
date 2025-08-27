
import React from "react";
import {useSelector} from "react-redux";
import useYouTubeTravelVideo from "../hooks/useYouTubeTrailerTravelVideo";

const VideoBackground = () => {
    const youTubeVideo = useSelector((store) => store.video?.youTubeVideo);
    useYouTubeTravelVideo();
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {youTubeVideo && (
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${youTubeVideo}?autoplay=1&mute=1&loop=1&playlist=${youTubeVideo}&start=18`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
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
