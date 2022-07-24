import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import "../styles/PilotCards.css";
//import PilotDetails from "./PilotDetails";

function Pilots(props) {
  const [pilotData, setPilotData] = useState([]);
  console.log(props.url);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      console.log("data", res.data);
      setPilotData(res.data);
    });
  }, [props.url]);

  console.log("pilotData", pilotData);

  const last = props.url.split("/");
  const id = last[last.length - 2];

  console.log("last", last);
  console.log("id", id);

  return (
    <div className="pilot-card">
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
