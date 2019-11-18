import React from "react";
import "./style.css";
import CardBtn from "../CardBtn"


function SearchResults(props) {
  return (
   <div>
            <h3>{props.title}</h3> 
            <p> {props.authors}</p>
           
            <p> {props.description}</p>
            <img src={props.image} alt={props.id}/>
            <a href={props.link}>View Book</a>
            <CardBtn onClick={props.onClick}/>
        </div>
        )
}

 
              
          

export default SearchResults;
