import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {USER_AVATAR} from "../utils/constants";
const Header = () => {
    const navigate = useNavigate();

    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };


    return (
        <div className="flex items-center justify-between absolute z-30 px-6 py-4 w-screen transition bg-gradient-to-b from-cyan-900 to-transparent ">
            <img
                src="Logo.png"
                alt="logo"
                className="w-32 drop-shadow-md "
            />
            {

                user && (
            <div className="flex items-center gap-5 text-white">

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
