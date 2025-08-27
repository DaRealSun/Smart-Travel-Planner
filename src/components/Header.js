import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {auth} from "../utils/firebase";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
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
            <div className="flex items-center gap-2 text-white">
                <FontAwesomeIcon icon={faUser} className="text-xl" />
                <img
                    className="w-32 "
                    alt="usericon"
                     src={user?.photoURL}/>
                <button
                    onClick={handleSignOut}
                    className="hover:underline">(Sign Out)</button>
            </div>
                )}
        </div>
    );
};

export default Header;
