import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Hero from './Components/Hero/Hero';
import Login from './Components/Login/Login';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route exact path="/">

            <Hero></Hero>

          </Route>

          <Route path="/home">

            <Hero></Hero>

          </Route>

          <Route path="/login">

            <Login></Login>

          </Route>




        </Switch>

      </Router>




    </UserContext.Provider>
  );
}

export default App;
