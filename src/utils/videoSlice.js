import {createSlice} from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        youTubeVideo: null,
    },
    reducers: {
        addYouTubeTravelVideo: (state, action) => {
            state.youTubeVideo = action.payload;
        }
    }
})
{/*Custom hook (useYouTubeTravelVideo) calls YouTube API, gets a videoId.

Hook dispatches addYouTubeTravelVideo(videoId) into Redux.

VideoBackground reads youTubeVideo from Redux with useSelector.*/}

export const {addYouTubeTravelVideo} = videoSlice.actions;
export default videoSlice.reducer;