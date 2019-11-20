import React from "react";
import "./style.css";

function Card(props) {

  return (

  
     
 <div class="container">
  <div class="row">
    <div className="  card" >
      <img src={props.image}  alt={props.key} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.authors}<br/>
        {props.description}</p>
        <a href={props.link} className="btn btn-primary">More Info</a>
      </div>
    </div>
</div>
</div>
    
  );

  };



export default Card;
