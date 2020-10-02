import React from 'react';
import logo from './images/logo.png';
import background from './images/back.png';
import avatar from './images/avatar.png';
import ava from './images/ava.png';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="App">
      <div className="main">
          <Header/>
          <div className="inner">
          <Navbar/>
          <Profile/>
          </div>
      </div>
    </div>
  );
}

export default App;
