import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, browserHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Alert from "./layout/Alert";

import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./auth/Dashboard";
// Redux
import { connect, Provider } from "react-redux";
import store from "./../configureStore";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
