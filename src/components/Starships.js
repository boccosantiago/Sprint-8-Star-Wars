import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Starships() {
  const [starshipsData, setStarshipsData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then((res) => {
      console.log("data", res.data.results);
      setStarshipsData(res.data.results);
    });
  }, []);

  const starshipsList = starshipsData.map((data) => {
    const last = data.url.split("/");
    const id = last[last.length - 2];
    return (
      <div key={data.name} className="ship-container">
        <a href={`/starships/${id}`} className="name">
          {data.name}
        </a>
        <div className="model">{data.model}</div>
      </div>
    );
  });

  return (
    <div className="starship-container">
      {starshipsData !== [] ? starshipsList : "CARGANDO..."}
    </div>
  );
}
