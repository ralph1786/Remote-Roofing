import React from "react";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import "./Footer.scss";

function Footer({ location }) {
  return (
    <div
      className="footer"
      style={{ position: location.pathname === "/" ? "absolute" : "relative" }}
    >
      <FooterLinks />
      <p>Copyright &copy; 2016 DEMO Streaming All Rights Reserved.</p>
      <FooterIcons />
    </div>
  );
}

export default Footer;
