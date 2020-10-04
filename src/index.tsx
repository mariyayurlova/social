 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {state} from './redux/state';

export type StateType={
    posts: [
        {id: number, message: string, likesCount: number}
    ],
    dialogs: [
        {id: number, name: string}
    ],
    messages: [
        {id: number, message: string}
    ]
}

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
