import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./containers/Home"
import Signin from "./containers/Signin"
import Signup from "./containers/Signup"
import PrivateRoute from "./components/HOC/PrivateRoute";
import * as bs from 'bootstrap/dist/css/bootstrap.css';

/**
* @author
* @function App
**/

const App = (props) => {
  return (
    <div>
      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  )
}

export default App