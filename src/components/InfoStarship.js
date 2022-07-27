import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/InfoStarship.css";
import Pilots from "./Pilots";
import Films from "./Films";
import "../styles/Pilots.css";
import "../styles/Films.css";

export default function InfoStarship() {
  const [starship, setStarship] = useState(null);
  const params = useParams();

  function uniqueStarship(id) {
    axios
      .get(`https://swapi.dev/api/starships/${id}`)
      .then((res) => setStarship(res.data));
  }

  useEffect(() => {
    uniqueStarship(params.id);
  }, [params.id]);

  console.log(starship);
  return (
    <div>
      {starship !== null ? (
        <div className="info-main">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}
            className="starship-img"
            alt={params.id}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
            }}
          />

          <div className="name-div">
            <p>{starship.name}</p>
          </div>
          <div className="row">
            <div className="column1">
              <p>Model: {starship.model}</p>
              <br />
              <p>Manufacturer: {starship.manufacturer}</p>
              <br />
              <p>Class: {starship.starship_class}</p>
              <br />
              <p>Cost: {starship.cost_in_credits} credits</p>
              <br />
              <p>Speed: {starship.max_atmosphering_speed} km/h</p>
              <br />
            </div>
            <div className="column2">
              <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
              <br />
              <p>Length: {starship.length} m</p>
              <br />
              <p>Cargo Capacity: {starship.cargo_capacity} metric tons</p>
              <br />
              <p>Crew: {starship.crew}</p>
              <br />
              <p>Passengers: {starship.passengers}</p>
            </div>
          </div>
          {starship.pilots.length !== 0 && (
            <div className="pilots-container">
              <h2>Related Pilots:</h2>
              <div className="pilots">
                {starship.pilots.map((url) => (
                  <Pilots key={url} url={url} />
                ))}
              </div>
            </div>
          )}
          <div className="films-container">
            <h2>Films:</h2>
            <div className="films">
              {starship.films.map((url) => (
                <Films key={url} url={url} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="loading">LOADING...</p>
      )}
    </div>
  );
}
