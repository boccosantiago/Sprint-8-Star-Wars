import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/Pilots.css";


function Pilots(props) {
  const [pilotData, setPilotData] = useState([]);

  const params = useParams();

  useEffect(() => {
    axios.get(props.url).then((res) => {
      setPilotData(res.data);
    });
  }, [props.url]);


  const last = props.url.split("/");
  const id = last[last.length - 2];


  return (
    <div className="pilots-cards">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        className="pilot-img"
        alt={id}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
      />
      <div>
        <p>{pilotData.name}</p>
      </div>
    </div>
  );
}

export default Pilots;
