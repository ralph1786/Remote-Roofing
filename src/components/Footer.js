import React from "react";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <FooterLinks />
      <FooterIcons />
    </div>
  );
}

export default Footer;
