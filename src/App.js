import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Home from './components/Home';
import Donate from './components/Donate';
import Team from './components/Team';
import ContactPage from './components/Contact';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/donate' component={Donate} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/contact' component={ContactPage} />
    </Switch>
  );
}

export default App;
