import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Contact = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Background image */}
            <img
                src={BG_URL}
                alt="bg_img"
                className="absolute inset-0 w-full h-full object-cover"
            />



            {/* Header always on top */}
            <div className="relative z-20">
                <Header />
            </div>

            {/* Centered contact card */}
            <div className="flex-grow flex items-center justify-center relative z-10">
                <div className="bg-transparent backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-white/30 ring-1 ring-white/40">
                    <h1 className="text-3xl font-bold text-amber-100 mb-6 text-center drop-shadow-md">
                        Get in Touch
                    </h1>

                    <div className="space-y-4 text-white">
                        <a
                            href="tel:8597865738"
                            className="flex items-center space-x-3 hover:text-amber-300 transition"
                        >
                            <FaPhone className="text-xl" />
                            <span>+1 (859) 786-5738</span>
                        </a>

                        <a
                            href="mailto:info.leminhson@gmail.com"
                            className="flex items-center space-x-3 hover:text-amber-300 transition"
                        >
                            <FaEnvelope className="text-xl" />
                            <span>info.leminhson@gmail.com</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/son-leminh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-amber-300 transition"
                        >
                            <FaLinkedin className="text-xl" />
                            <span>linkedin.com/in/son-leminh</span>
                        </a>

                        <a
                            href="https://github.com/DaRealSun/Smart-Travel-Planner"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 hover:text-amber-300 transition"
                        >
                            <FaGithub className="text-xl" />
                            <span>github.com/DaRealSun/Smart-Travel-Planner</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
