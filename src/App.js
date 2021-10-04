import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className='app'>
      <Switch>
        <Route exact path='/' component={Home}>
            <Header />
            <Home />
        </Route>
          
        <Route exact path='/login'>
               
            <Login />
        </Route>
          
      </Switch>  
    </div>
  </Router>
  );
}

export default App;
