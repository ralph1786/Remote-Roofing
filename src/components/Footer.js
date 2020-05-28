import React from "react";
import FooterIcons from "./FooterIcons";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <h2 style={{ color: "white" }}>Footer</h2>
      <FooterIcons />
    </div>
  );
}

export default Footer;
