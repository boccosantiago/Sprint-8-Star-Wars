import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Films.css";

function Films(props) {
  const [filmData, setFilmData] = useState([]);
  //console.log(props.url);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setFilmData(res.data);
    });
  }, [props.url]);

  const last = props.url.split("/");
  const id = last[last.length - 2];

  return (
    <div className="films-card">
      <img
        src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}
        className="films-img"
        alt={id}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
      />
      <div>
        <p>{filmData.title}</p>
      </div>
    </div>
  );
}

export default Films;
