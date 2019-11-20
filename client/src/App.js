import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
  return (
 
    <Router>
         <div>
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route path="/Saved" component={Saved} />
        
      </div>
    </Router>
  );
}

export default App;

