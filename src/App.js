import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home';
import Destination from './Destination/Destination';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import LogIn from './LogIn/LogIn';
import Private from './Private/Private';

export const userContext = createContext();

function App() {

  const [logInUser, setLogInUser] = useState({});
  return (

    <userContext.Provider value={[logInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Private path="/destination/:ServiceName">
            <Destination />
          </Private>
          <Private path="/destination">
            <Destination />
          </Private>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
