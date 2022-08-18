import React from "react";

function Unauthorized() {
  const mystyle = {
    position: "absolute",
    color: "yellow",
    width: "80%",
    margin: "80px auto",
    textAlign: "center",
    fontSize: "2rem",
    left: "10%",
  };
  const mystyleimg = {
    width: "95%",
  };

  return (
    <div style={mystyle}>
      YOU ARE NOT AUTHORIZED!
      <img
        style={mystyleimg}
        alt="trap"
        src="https://c.tenor.com/SPK9eO-kyWcAAAAC/star-wars-admiral-ackbar.gif"
      />
    </div>
  );
}

export default Unauthorized;
