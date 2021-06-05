import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./containers/Home"
import Signin from "./containers/Signin"
import Signup from "./containers/Signup"

/**
* @author
* @function App
**/

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Signin' component={Signin} />
        <Route path='/Signup' component={Signup} />
      </Switch>
    </div>
  )
}

export default App