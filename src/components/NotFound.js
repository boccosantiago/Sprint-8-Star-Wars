import React from "react";


function NotFound(){

  const mystyle = {
    position: "absolute",
    color: "yellow",
    width:'80%',
    margin:'100px auto',
    textAlign: "center",
    fontSize: "2rem",
    left: '10%'
  };
  const mystyleimg = {
      width:'100%',
    };

    return(<div 
      style={mystyle}> Nothing to see here but this baby Yoda
      <img style={mystyleimg} alt='yoda'src="https://media.giphy.com/media/iYVneIXJQ3jdJLkZmM/giphy.gif"/> 
      </div>)

}

export default NotFound