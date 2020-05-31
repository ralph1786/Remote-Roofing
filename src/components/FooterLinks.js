import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";
import "./FooterLinks.scss";

function FooterLinks() {
  const linkNames = [
    "Home",
    "Terms and Conditions",
    "Privacy Policy",
    "Collection Statement",
    "Help",
    "Manage Account",
  ];

  const listOfLinks = linkNames.map((name) => <li key={uuid()}>{name}</li>);

  return (
    <Fragment>
      <ul>{listOfLinks}</ul>
    </Fragment>
  );
}

export default FooterLinks;
