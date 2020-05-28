import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import AppleStore from "../Assets/icons/apple-store.svg";
import GoogleStore from "../Assets/icons/google-play.svg";

function FooterIcons() {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebookF} size="2x" />
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      <img
        src={AppleStore}
        alt="logo to download application from apple store"
      />
      <img
        src={GoogleStore}
        alt="logo to download application from google play store"
      />
    </div>
  );
}

export default FooterIcons;
