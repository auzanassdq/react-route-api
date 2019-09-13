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
  }
}
