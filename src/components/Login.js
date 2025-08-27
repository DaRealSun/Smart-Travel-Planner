import React, {useRef, useState} from 'react';
import Header from "./Header";
import{checkValidData} from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import {useDispatch} from "react-redux";
import {addUser} from "../utils/userSlice";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {USER_AVATAR} from "../utils/constants";



const Login = () => {
//     create state variable for checking sign in , sign up form
    const email= useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const dispatch = useDispatch();

    const [isSignIn, setIsSignIn] = React.useState(true);
    const[errorMessage, setErrorMessage] = useState(null);




    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            setErrorMessage(error.message)
        });
    }

    const handleButtonClick = () => {
        //Validate the form data
        // checkValidData(email,password)
        console.log("clicked");
        const message = checkValidData( null, email.current.value, password.current.value)
        setErrorMessage(message)

        if(message) return; // return null if not valid data

        //Sign In Sign Up Logic
        if(!isSignIn){
            //Sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR

                    }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL} = auth.user;
                        dispatch(
                            addUser({
                                uid:uid,
                                email:email,
                                displayName:displayName,
                                photoURL:photoURL
                            }));

                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error);
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage + " " + errorCode)
                    // ..
                });
        } else {
            //Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }
    };


    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
       // setErrorMessage(null); // clear error message when toggling forms
    }
    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <Header />
            {/* Background image */}
            <img
                src="/Background_img.png"
                alt="background"
                className="absolute w-full h-full object-cover"
            />

            {/* Warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-orange-100/30 to-amber-200/30 backdrop-blur-sm"></div>

            {/* Centered Login Card */}
            <div className="relative z-10 flex justify-center items-center h-full">

                <form onSubmit={(e) => e.preventDefault()}
                    className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl px-10 py-12 w-96 flex flex-col items-center space-y-5 border border-white/30">
                    <h1 className="text-4xl font-bold text-amber-600 drop-shadow-md">
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </h1>

                    <p className="text-sm text-gray-600 text-center max-w-xs">
                        Begin your next adventure — log in to continue.
                    </p>

                    {!isSignIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />)}


                    <input
                        ref={email}
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />

                    <p className="text-sm text-red-500 text-center max-w-xs">{errorMessage}</p>

                    <button
                        className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-xl transition shadow-md"
                        onClick={handleButtonClick}
                        >
                        <h1 className="font-bold">
                            {isSignIn ? 'Sign In' : 'Sign Up'}
                        </h1>
                    </button>

                    <button className="text-sm text-gray-600 text-center max-w-xs underline"
                        onClick={toggleSignIn}>
                        {isSignIn
                            ? " New to Solo Top? Sign Up Now"
                            : " Already registered? Sign In Now"}
                    </button>

                    <button
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
                        onClick={handleGoogleLogin}
                        >
                        Log in with Google
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Login;
