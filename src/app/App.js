import '../App.css';

import {Provider} from "react-redux";
import appStore from "../utils/appStore";
import {RouterProvider} from "react-router-dom";
import React from "react";
import appRouter from "../router/appRouter";
import AuthListener from "../components/AuthListener";


function App() {
    return (
        <Provider store={appStore}>
            <AuthListener />
            <RouterProvider router={appRouter} />
        </Provider>
    );
}

export default App;
