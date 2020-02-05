import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signup from "../src/components/signedup/index";
import Nav from "../src/components/nav/index";



function App() {
  return (
   <Router>
    
    <div>
    <Nav />
        <Route exact path="/" component={Home} />
        <Route path='/signup' component={Signup} />
      
    </div>
 
    </Router>
  );
}

export default App;
