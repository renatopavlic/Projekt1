import React from 'react'
import { Route, Switch } from "react-router-dom";

import Home from "../../pages/Home"
import About from "../../pages/About"

import './main.css'

function Main() {
    return (
        <div className="mymain">
          <Switch>
            <Route path="/" render={props => <Home {...props} />} exact/>
            <Route path="/about" render={props => <About {...props} />} exact/>
          </Switch>
        </div>
    )
}

export default Main
