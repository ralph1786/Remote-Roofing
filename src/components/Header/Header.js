import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ location }) {
  const headerMessage = (pathname) => {
    if (pathname === "/series") {
      return "Series";
    } else if (pathname === "/movies") {
      return "Movies";
    }
    return "Titles";
  };

  return (
    <Fragment>
      <section className="header-top">
        <Link to="/">
          <h2 className="header-top-title">DEMO Streaming</h2>
        </Link>
        <div className="container-buttons">
          <button className="container-buttons-login">Log In</button>
          <button className="container-buttons-trial-button">
            Start your free trial
          </button>
        </div>
      </section>
      <section className="header-bottom">
        <h3>Popular {headerMessage(location.pathname)}</h3>
      </section>
    </Fragment>
  );
}

export default Header;
