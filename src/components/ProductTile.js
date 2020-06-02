import React from "react";
import "./ProductTile.scss";

function ProductTile(props) {
  const { image, title, isDarkMode } = props;
  return (
    <li className="container-product-tile">
      <img
        src={image}
        className="poster"
        alt="Poster illustrating a tv series"
      />
      <span className="title" style={{ color: isDarkMode ? "white" : "black" }}>
        {title}
      </span>
    </li>
  );
}

export default ProductTile;
