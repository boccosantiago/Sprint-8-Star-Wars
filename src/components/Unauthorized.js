import React from "react";


function Unauthorized(){

    const mystyle = {
        color: "yellow",
        width:'700px',
        margin:'auto',
        textAlign: "center",
        padding: "50px",
        fontSize: "2em",
      };

    return(<div style={mystyle}> YOU ARE NOT AUTHORIZED! <img alt='trap'src="https://c.tenor.com/SPK9eO-kyWcAAAAC/star-wars-admiral-ackbar.gif"/> </div>)

}

export default Unauthorized