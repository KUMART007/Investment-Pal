import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./components/signup/index";
import UserPage from "./pages/profilepage";
import SignIn from "./components/sign-in/index"
import LiveFeed from "./pages/live-feed"
import PostPage from "./pages/postspage"




function App() {
  return (
   <Router>
    
    <div>
        <Route exact path="/" component={Home} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/profile' component={UserPage} />
        <Route path='/live-feed' component={LiveFeed} />
        <Route path='/post-page' component={PostPage} />

      
    </div>
 
    </Router>
  );
}

export default App;
