import { YOUTUBE_API_KEY} from "../utils/constants";
import {addYouTubeTravelVideo} from "../utils/videoSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const useYouTubeTravelVideo = () => {
    // Fetch Data from YouTube v3 API and update store
    const dispatch = useDispatch();
    const youTubeVideo = useSelector(
        (store) => store.video.youTubeVideo
    )
    const getYouTubeVideo = async () => {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=4k+Films+by+Adnan&type=video&maxResults=1&key=${YOUTUBE_API_KEY}`
        );
        const json = await response.json();
        console.log(json);

        const videoId = json.items[0]?.id?.videoId;
        if (videoId) {
            dispatch(addYouTubeTravelVideo(videoId));
        }
    };

    useEffect(() => {
        !youTubeVideo && getYouTubeVideo();
    }, []);
}
export default useYouTubeTravelVideo;