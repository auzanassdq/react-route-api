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
  }
  localStorage.setItem("userSignIn", JSON.stringify(submitValue));
}

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
