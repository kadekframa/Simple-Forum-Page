import React from 'react';
import {BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom'
// import App from '../App';
import { Main, Navbar } from '../components';
import Login from '../Pages/Login'
import Register from '../Pages/Regsiter';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Switch>
    </Router>
  )
}

export default Routes;
