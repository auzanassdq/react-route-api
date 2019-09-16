<<<<<<< HEAD
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Album from "./components/Album";
import Home from "./components/Home";

function setUserLocal(){
  let submitValue = {
    email: "",
    password: "",
    isSignIn: false
=======
import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Album from "./components/Album"
import PrivateRoute from "./utils/PrivateRoute"
export default class App extends Component {
  render() {
    return (
      <Router>
          <Route path="/" exact component={SignIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute exact path="/album" component={Album}/>
      </Router>
    )
>>>>>>> f6a5477cdb31e6849c12a4b9742b0100bbadd8e8
  }
  localStorage.setItem("userSignIn", JSON.stringify(submitValue));
}
<<<<<<< HEAD

function App() {
  setUserLocal()
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/album" component={Album} />
    </Router>
  );
}

export default App;
=======
>>>>>>> f6a5477cdb31e6849c12a4b9742b0100bbadd8e8
