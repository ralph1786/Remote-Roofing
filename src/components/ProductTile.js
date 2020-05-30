import React from "react";
import "./ProductTile.scss";

function ProductTile(props) {
  const { image, title } = props;
  return (
    <div className="container">
      <img
        src={image}
        className="poster"
        alt="Poster illustrating a tv series"
      />
      <span className="title">{title}</span>
    </div>
  );
}

export default ProductTile;
