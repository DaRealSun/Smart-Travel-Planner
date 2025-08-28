import React from "react";

function handleClick() {

}

const VideoTitle = ({ title, overview }) => {
    return (

        <div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

            {/* Foreground content */}
            <div className="absolute bottom-20 left-10 text-white z-10 ">
                <h1 className="text-5xl font-extrabold drop-shadow-2xl">
                    Solo Travel & Camping
                </h1>
                <p className="mt-4 text-lg max-w-xl drop-shadow-md">
                    Explore nature, travel solo, and find peace in the wilderness.
                </p>
                <button
                    onClick={handleClick}
                    className="mt-6 px-6 py-3
    bg-gradient-to-l bg-amber-600
    text-white text-lg font-semibold rounded-lg shadow-lg
     duration-1000 ease-in-out
    hover:from-red-600 hover:to-amber-600"
                >
                    ✍️ Write your own story
                </button>

            </div>
        </div>
    );
};

export default VideoTitle;
