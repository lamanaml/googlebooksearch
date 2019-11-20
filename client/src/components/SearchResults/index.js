import React from "react";
import "./style.css";
import CardBtn from "../CardBtn"
import Card from "../Card"

function SearchResults(props) {
  return (
   <div>
   
      <CardBtn onClick={props.onClick}/>
    </div>
  )
}


export default SearchResults;
