import React, {useRef, useState} from 'react';
import Header from "./Header";
import{checkValidData} from "../utils/validate";
const Login = () => {
//     create state variable for checking sign in , sign up form
    const [isSignIn, setIsSignIn] = React.useState(true);
    const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    }
    const email= useRef()
    const password = useRef()
    const name = useRef()
    const[errorMessage, setErrorMessage] = useState(null);
    const handleButtonClick = () => {
        //Validate the form data
        // checkValidData(email,password)
        console.log("clicked");
        console.log(email.current.value)
        console.log(password.current.value)
        const message = checkValidData(name.current.value, email.current.value, password.current.value)
        setErrorMessage(message)
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
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                    />
                    <input
                        ref={password}
                        type="text"
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

                    <p className="text-sm text-gray-600 text-center max-w-xs"
                        onClick={toggleSignIn}>
                        {isSignIn
                            ? " New to Solo Top? Sign Up Now"
                            : " Already registered? Sign In Now"}

                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
