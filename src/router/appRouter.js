import {createBrowserRouter} from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";
import React from "react";
import Error from "../components/Error";


const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },{
        path: "/browse",
        element: <Browse />,
    },{
        path: "/error",
        element: <Error />,
    }
]);

export default appRouter;