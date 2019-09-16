import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Album from "./components/Album";
import Home from "./components/Home";

function App() {
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
