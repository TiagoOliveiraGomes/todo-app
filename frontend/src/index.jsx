import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducers from "./main/reducers"
import App from "./main/app";

const store = createStore(reducers)
ReactDom.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById("app"));
