import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {RootStateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


renderTree(state);

subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
