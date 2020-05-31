import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";

function App({ location }) {
  return (
    <div className="App">
      <Header location={location} />
      <Switch>
        <Route path="/series" render={() => <Series />} />
        <Route path="/movies" render={() => <Movies />} />
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Footer location={location} />
      <p>Learn React</p>
    </div>
  );
}

export default withRouter(App);
