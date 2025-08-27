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


export const {addYouTubeTravelVideo} = videoSlice.actions;
export default videoSlice.reducer;