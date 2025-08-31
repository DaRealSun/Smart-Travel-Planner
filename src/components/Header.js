import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleGPTSearchView} from "../utils/gptSlice";
import {LOGO_URL, SUPPORT_LANGUAGE} from "../utils/constants";
import {setLanguage} from "../utils/languageSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };


    const handleGPTSearchClick =() => {
        //Toggle GPT Search Page
        dispatch(toggleGPTSearchView());
    }

    const handleContactClick = () => {
        navigate("/contact");
    }

    const handleLoGoClick = () => {
        //dispatch(toggleGPTSearchView());
    }


    const handleLanguageChange = (e) => {
        dispatch(setLanguage(e.target.value));
    };
    return (
        <div className="flex items-center justify-between absolute z-30 px-6 py-4 w-screen transition bg-gradient-to-b from-cyan-900 to-transparent ">
            <img
                onClick={handleLoGoClick}
                src={LOGO_URL}
                alt="logo"
                className="w-32 drop-shadow-md "
            />


            {//Only show when user present
                user && (
            <div className="flex items-center gap-5 text-white">

                {showGPTSearch &&(
                <select className=" py-1.5
             rounded-xl
             bg-white/20 backdrop-blur-md
             border border-white/30
             text-white
             focus:outline-none focus:ring-2 focus:ring-amber-400
             hover:bg-white/30
             transition duration-200 ease-in-out"
                onChange={handleLanguageChange}>
                    {SUPPORT_LANGUAGE.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}

                </select>)
                }


                {/*//Contact Page*/}
                <button
                    onClick={handleContactClick}
                    className=" px-2 py-2 border-2 m border-red-400
             text-red-500 hover:bg-red-500 hover:text-white
             text-lg font-semibold rounded-lg
             transition duration-300 ease-in-out"
                >
                    Contact
                </button>

                {/*//GPT Search Page*/}
                <button
                    onClick={handleGPTSearchClick}
                    className=" px-2 py-2 border-2 m border-red-400
             text-red-500 hover:bg-red-500 hover:text-white
             text-lg font-semibold rounded-lg
             transition duration-300 ease-in-out"
                >
                    {showGPTSearch ? "Home Page" : "GPT Search"}
                </button>


                {user?.photoURL ? (
                    <img
                        className="w-10 h-10 rounded-full object-cover"
                        alt="usericon"
                        src={user.photoURL}
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <FontAwesomeIcon icon={faUser} className="text-xl text-gray-500" />
                    </div>
                )}



                <button
                    onClick={handleSignOut}
                    className="mr-6 px-3 py-2 border-2 m border-yellow-500
             text-yellow-500 hover:bg-yellow-500 hover:text-white
             text-lg font-semibold rounded-lg
             transition duration-300 ease-in-out"
                >
                    🚪 Sign Out
                </button>
            </div>
                )}
        </div>
    );
};

export default Header;
