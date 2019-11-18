import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
  return (
 
    <Router>
         <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Search" component={Search} />
        <Route path="/Saved" component={Saved} />
        <Route path="/Navbar" component={Navbar} />
      </div>
    </Router>
  );
}

export default App;

