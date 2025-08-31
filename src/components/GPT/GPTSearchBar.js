import React from 'react';
import { FiSearch } from 'react-icons/fi';
import lang from "../../utils/languageConstant";

import {useDispatch, useSelector} from "react-redux";

const GptSearchBar = () => {
    const languageKey = useSelector((store) => store.language.languageState)
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex w-full max-w-2xl
                      bg-white/10 backdrop-blur-xl
                      rounded-full overflow-hidden
                      shadow-2xl ring-1 ring-white/30
                      transition-all duration-300">

                {/* Input */}
                <input
                    type="text"
                    placeholder={lang[languageKey].gptSearchPlaceholder}
                    className="flex-grow px-6 py-4 text-white placeholder-white/90 bg-transparent focus:outline-none"
                />

                {/* Button */}
                <button className="flex items-center gap-2 px-6 py-3 bg-cyan-900/80 hover:bg-cyan-950/90 text-white font-medium transition-all duration-200">
                    <FiSearch className="w-5 h-5"/>
                    {lang[languageKey].search}
                </button>
            </div>
        </div>
    );
};

export default GptSearchBar;
