import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Album from "./components/Album";

const fakeAuth = {
  isAuthenticated: false,
  authencate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true ?
      <Component {...props}/> : 
      <Redirect to='/sign-in'/>
  )}/>
)

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/sign-up">SignUp</Link>
          </li>
          <li>
            <Link to="/album">Album</Link>
          </li>
        </ul>
      </nav>

      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      {/* <Route path="/album" component={Album} /> */}
      <PrivateRoute path='/album' component={Album}/>

    </Router>
  );
}

export default App;
