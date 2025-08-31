import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";
import gptReducer from "./gptSlice";
import contactReducer from "./contactSlice";
import languageReducer from "./languageSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        video: videoReducer,
        gpt: gptReducer,
        contact: contactReducer,
        language: languageReducer,
    }
})
export default appStore;