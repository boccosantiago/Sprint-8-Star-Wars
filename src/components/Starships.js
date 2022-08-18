import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Starships() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [load, setLoad] = useState(1);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/?page=${load}`).then((res) => {
      setStarshipsData((prevStarshipsData) => [
        ...prevStarshipsData,
        ...res.data.results,
      ]);
    });
  }, [load]);

  function loadMore() {
    setLoad((prevLoad) => prevLoad + 1);
  }

  const starshipsList = starshipsData.map((data, index) => {
    const last = data.url.split("/");
    const id = last[last.length - 2];
    return (
      <div key={index} className="ship-container">
        <Link to={`/starships/${id}`}>
          <p className="name">{data.name}</p>

          <div className="model">{data.model}</div>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className="starship-container">
        {starshipsData !== [] ? (
          starshipsList
        ) : (
          <p className="loading">LOADING...</p>
        )}
      </div>
      <div className="buttons">
        {load < 4 ? <button onClick={loadMore}>Load More...</button> : ""}
      </div>
    </div>
  );
}
