import React from "react";
import "./style.css";

function Card(props) {

  return (

  
     
      <div className="content">
        <ul>
          <h3>{props.title}</h3> 
          <p> {props.authors}</p>
          <p> {props.description}</p>        
          <a href={props.link}>View Book</a>
          {/* {props.children} */}
          <div className="img-container">
            {props.key}
            <img src={props.image}  alt={props.title} />
          </div>
        </ul>
      </div>

  );

  };



export default Card;
