import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main">
          <Header/>
          <div className="inner">
            <Navbar/>
            <Profile/>
            {/*<Dialogs/>*/}
            <Route></Route>
            <Route></Route>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
