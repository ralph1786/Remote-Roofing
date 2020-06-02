import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";

function App({ location }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") || false)
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Header
        location={location}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={darkMode}
      />
      <Switch>
        <Route path="/series" render={() => <Series isDarkMode={darkMode} />} />
        <Route path="/movies" render={() => <Movies isDarkMode={darkMode} />} />
        <Route path="/" render={() => <Home isDarkMode={darkMode} />} />
      </Switch>
      <Footer location={location} />
    </div>
  );
}

export default withRouter(App);
