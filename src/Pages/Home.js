import React from "react";
import { Link } from "react-router-dom";
import Series from "../Assets/images/series.png";
import Movies from "../Assets/images/movies.png";
import ProductTile from "../components/ProductTile";
import "./Home.scss";

function Home() {
  return (
    <ul className="container-home">
      <Link to="/series">
        <ProductTile image={Series} title="Popular Series" />
      </Link>
      <Link to="/movies">
        <ProductTile image={Movies} title="Popular Movies" />
      </Link>
    </ul>
  );
}

export default Home;
