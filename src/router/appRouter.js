import {createBrowserRouter} from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";
import React from "react";
import Error from "../components/Error";
import Contact from "../components/Contact";
import GPTSearch from "../components/GPT/GPTSearch";


const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },{
        path: "/browse",
        element: <Browse />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
      path: "/gptSearch",
      element: <GPTSearch/>
    },



    {
        path: "/error",
        element: <Error />,
    }
]);


export default appRouter;