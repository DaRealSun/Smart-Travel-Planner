
import React from 'react';
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import GPTSearch from "./GPT/GPTSearch";
import {useSelector} from "react-redux";



const Browse = () => {
    const showGPTSearchView = useSelector((store) => store.gpt.showGPTSearch)
    return (
        <div>
            <Header />

            {showGPTSearchView ? (
                <GPTSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )
            }

            {/*{showContact*/}
            {/*    ? (<Contact/>)*/}
            {/*    : (<>*/}
            {/*    </>)*/}
            {/*}*/}



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