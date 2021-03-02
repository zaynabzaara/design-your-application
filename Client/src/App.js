import { BrowserRouter, Route,Switch } from "react-router-dom";
import "./App.css";

import Menu from "./Menu";
import React from 'react';
import Home from './Pages/Home';
import HallOfFame from './Pages/HallOfFame';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Niepcers from './Pages/Niepcers'




function App() {
  return (
    <BrowserRouter>
    <Menu />
    <Switch>
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route exact path="/HallOfFame" component={HallOfFame}/>
        <Route exact path="/SignIn" component={SignIn}/>
        <Route exact path="/SignUp" component={SignUp}/>
        <Route exact path='/Niepcers' component={Niepcers}/>
      </div>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
