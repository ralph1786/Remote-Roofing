import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { PulseLoader } from "react-spinners";
import ProductTile from "../components/ProductTile";
import ErrorMessage from "../Assets/images/errorMessage.webp";
import { filterAndSort } from "../helper/filterSort";
import "./Movies.scss";

function Movies({ isDarkMode }) {
  const [listMovies, setListMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchListOfMovies = async () => {
      setIsLoading(true);
      try {
        const result = await axios(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
        );
        const sortedResult = filterAndSort(result.data, "movie", 21);
        setIsLoading(false);
        setListMovies(sortedResult);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(true);
      }
    };
    fetchListOfMovies();
  }, []);

  const content = listMovies.map(({ title, images }) => (
    <ProductTile
      key={uuid()}
      title={title}
      image={images["Poster Art"].url}
      isDarkMode={isDarkMode}
    />
  ));

  return (
    <div
      className="container-movies"
      style={{ backgroundColor: isDarkMode ? "#1a1a1a" : "white" }}
    >
      <PulseLoader size={50} color={"#2a7dfa"} loading={isLoading} />
      {errorMessage && (
        <img
          src={ErrorMessage}
          alt="displays message due to an error in our part."
        />
      )}
      <ul className="product-tile-list">{content}</ul>
    </div>
  );
}

export default Movies;
