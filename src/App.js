import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Album from "./components/Album";

// fakeAuth OBJ
const fakeAuth = {
  isAuthenticated: true,
  authencate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

// PrivateRoute Function
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true ?
      <Component {...props}/> :
      // alert("You must login"),
      <Redirect to={{
        pathname: '/sign-in',
        state: { from: props.location}
      }}/>
  )}/>
)

// AuthButton to sign out
const AuthButton = withRouter(({history}) => (
  fakeAuth.isAuthenticated === true ?
    <button onClick={() => {
      fakeAuth.signout(() => history.push('/'))
    }}>Sign out</button> :
    <p>You are not logged in</p>
))

function App() {
  return (
    <Router>
      <AuthButton/>
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
      <PrivateRoute path='/album' component={Album}/>

    </Router>
  );
}

export default App;
