import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./containers/Home"
import Signin from "./containers/Signin"
import Signup from "./containers/Signup"
import ForgotPassword from "./containers/ForgotPassword"
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";
import * as bs from 'bootstrap/dist/css/bootstrap.css';

/**
* @author
* @function App
**/

const App = (props) => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <div>
      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/forgotpassword' component={ForgotPassword} />
      </Switch>
    </div>
  )
}

export default App