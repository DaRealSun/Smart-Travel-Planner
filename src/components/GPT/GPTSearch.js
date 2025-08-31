import React from 'react';
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestion";
import {BG_URL} from "../../utils/constants";

const GptSearch = () => {
    return (
        <div>
            <img className="absolute -z-30 aspect-auto w-screen"
                src= {BG_URL}
                alt="Background_img"
                />
            <GPTSearchBar />
            <GPTSuggestion/>
        </div>
    );
};

export default GptSearch;