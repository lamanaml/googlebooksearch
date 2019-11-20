import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
  return (

<nav className="navbar"><ul>
  <li className="title navbar-brand"><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
         Google Books
        </Link></li>
  <li className="navbar-text center"><Link to="/Search" 
          className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}  >
          Search </Link></li>
  <li className="navbar-text"><Link
          to="/Saved"
          className={window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link></li>


</ul></nav>);

}

export default Navbar;
