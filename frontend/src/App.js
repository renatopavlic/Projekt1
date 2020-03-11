import React from 'react';
import {Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Header from "./components/Header"
import Footer from './components/Footer'
import Home from "./pages/Home"
import About from "./pages/About"

const history = createBrowserHistory();

const App = props => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" render={props => <Home {...props} />} exact/>
        <Route path="/about" render={props => <About {...props} />} exact/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
