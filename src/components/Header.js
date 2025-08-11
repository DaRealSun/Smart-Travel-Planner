import React from 'react';

const Header = () => {
    return (
        <div className="absolute top-0 left-0 z-30 px-6 py-4 w-52 bg-cyan-900/70 backdrop-blur-md rounded-br-3xl shadow-lg border border-white/20">
            <img
                src="Logo.png"
                alt="logo"
                className="w-32 drop-shadow-md"
            />
        </div>
    );
};

export default Header;
