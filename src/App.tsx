import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./index";

function App(props:StateType) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <Header/>
          <div className="inner">
            <Navbar/>
            <Route exact path="/" render = {() => <Profile />}></Route>
            <Route path="/profile" render = {() => <Profile/>}></Route>
            <Route path="/dialogs" render = {() => <Dialogs/>}></Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
