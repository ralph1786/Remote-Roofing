import React, { Fragment } from "react";
import "./Header.scss";

function Header() {
  return (
    <Fragment>
      <section className="header-top">
        <h2 className="header-top-title">DEMO Streaming</h2>
        <div className="container-buttons">
          <button className="container-buttons-login">Log In</button>
          <button className="container-buttons-trial-button">
            Start your free trial
          </button>
        </div>
      </section>
      <section className="header-bottom">
        <h3>Popular Titles</h3>
      </section>
    </Fragment>
  );
}

export default Header;
