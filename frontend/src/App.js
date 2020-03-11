import React from 'react';
import {Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Header from "./components/Header"
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

const history = createBrowserHistory();

const App = props => {
  return (
    <Router history={history}>
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;
