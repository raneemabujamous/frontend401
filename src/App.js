import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Home from "./componenet/Home";
import Faveroite from "./componenet/Faveroite";
import Header from "./componenet/Header";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/fav">
              <Faveroite />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
