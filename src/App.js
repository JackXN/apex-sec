import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/Navbar/Sidebar';


function App() {
  return (
<Router>
  <SideBar/>
<Navbar/>
  <div className='App'>
    <div className='dark-layer'>
      <Route path = '/' exact>
    <Home/>
      </Route>
    </div>
  </div>
</Router>
  );
}

export default App;
