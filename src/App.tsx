import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {addPost, PostsPageType, PostsType} from './redux/state';

type AppType = {
}


const App:React.FC<AppType> = (props) => {


  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <Header/>
          <div className="inner">
            <Navbar/>
            <Route exact path="/" render = {() => <Profile profilePage={state.profilePage} addPost={addPost}/>}/>
            <Route path="/profile" render = {() => <Profile profilePage={state.profilePage} addPost={addPost}/>}/>
            <Route path="/dialogs" render = {() => <Dialogs />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
