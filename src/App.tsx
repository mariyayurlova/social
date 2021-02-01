import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionsType, StoreType} from './redux/store';

type PropsType = {
  store: StoreType
  dispatch: (action: ActionsType) => void
}


const App:React.FC<PropsType> = (props) => {
  const state = props.store.getState();

  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <Header/>
          <div className="inner">
            <Navbar/>
            <Route exact path="/" render = {() => <Profile store={props.store} profilePage={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
            <Route path="/profile" render = {() => <Profile store={props.store}  profilePage={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
            <Route path="/dialogs" render = {() => <Dialogs dialogsPage={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
