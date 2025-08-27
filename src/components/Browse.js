
import React from 'react';
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";


const Browse = () => {

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer/>
            {
                /*
                * Maincontainer
                * -videoBG
                * -videoTitle
                * SecondaryContainer
                * -movieList * n
                * --cards * n
                * */
            }
        </div>
    );
};

export default Browse;