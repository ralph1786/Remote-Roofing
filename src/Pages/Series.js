import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { PulseLoader } from "react-spinners";
import ProductTile from "../components/ProductTile";
import ErrorMessage from "../Assets/images/errorMessage.webp";
import { filterAndSort } from "../helper/filterSort";
import "./Series.scss";

function Series() {
  const [listSeries, setListSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchListOfSeries = async () => {
      setIsLoading(true);
      try {
        const result = await axios(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
        );
        const sortedResult = filterAndSort(result.data, "series", 21);
        setIsLoading(false);
        setListSeries(sortedResult);
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(true);
      }
    };
    fetchListOfSeries();
  }, []);

  const content = listSeries.map(({ title, images }) => (
    <ProductTile key={uuid()} title={title} image={images["Poster Art"].url} />
  ));

  return (
    <div className="container-series">
      <PulseLoader size={50} color={"#2a7dfa"} loading={isLoading} />
      {errorMessage && (
        <img
          src={ErrorMessage}
          alt="displays error message due to an error in our part."
        />
      )}
      {content}
    </div>
  );
}

export default Series;
