import React from "react";
import "./style.css";

function Card(props) {

  return (
    <div 
      title={props.title}
      image={props.image}
      src={props.link}
    >
    {props.children}
      </div>
 
  
  );
};




export default Card;
