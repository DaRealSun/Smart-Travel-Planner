import {createSlice} from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        languageState: "en",
    },
    reducers: {
        setLanguage: (state, action) => {
            state.languageState = action.payload;
        }
    }
})

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;