import React from "react";

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
                <button className="mt-6 px-6 py-3 bg-yellow-600 hover:bg-red-700 text-lg font-semibold rounded-lg shadow-md transition duration-300">
                    ✍️ Write your own story
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
