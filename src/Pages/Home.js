import React from "react";
import { Link } from "react-router-dom";
import Series from "../Assets/images/series.png";
import Movies from "../Assets/images/movies.png";
import ProductTile from "../components/ProductTile";
import "./Home.scss";

function Home({ isDarkMode }) {
  return (
    <ul
      className="container-home"
      style={{ backgroundColor: isDarkMode ? "#1a1a1a" : "white" }}
    >
      <Link to="/series">
        <ProductTile
          image={Series}
          title="Popular Series"
          isDarkMode={isDarkMode}
        />
      </Link>
      <Link to="/movies">
        <ProductTile
          image={Movies}
          title="Popular Movies"
          isDarkMode={isDarkMode}
        />
      </Link>
    </ul>
  );
}

export default Home;
