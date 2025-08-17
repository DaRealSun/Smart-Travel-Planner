import '../App.css';

import AuthListener from "../components/AuthListener";
import {Provider} from "react-redux";
import appStore from "../utils/appStore";
import {RouterProvider} from "react-router-dom";
import React from "react";
import appRouter from "../router/appRouter";


function App() {
    return (
        <Provider store={appStore}>
            <RouterProvider router={appRouter}/>
        </Provider>
    )
}

export default App;
