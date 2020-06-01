import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import AppleStore from "../../Assets/icons/apple-store.svg";
import GoogleStore from "../../Assets/icons/google-play.svg";
import Microsoft from "../../Assets/icons/microsoftBadge.svg";
import "./FooterIcons.scss";

function FooterIcons() {
  const socialMediaIconsImages = [faFacebookF, faTwitter, faInstagram];
  const socialMediaIcons = socialMediaIconsImages.map((icon, index) => (
    <FontAwesomeIcon icon={icon} size="2x" key={index} />
  ));

  return (
    <div className="container-icons">
      <div className="social-media-icons">{socialMediaIcons}</div>
      <div className="download-icons">
        <img
          src={AppleStore}
          alt="logo to download application from apple store"
        />
        <img
          src={GoogleStore}
          alt="logo to download application from google play store"
        />
        <img
          src={Microsoft}
          alt="logo to download application from Microsoft"
        />
      </div>
    </div>
  );
}

export default FooterIcons;
