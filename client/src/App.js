import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserNav from "./components/userNav/index";
import Login from "./components/sign-in/index";
import Register from "./components/signup/index";
import Profile from "./components/profile/Profile";
import Home from "./components/homePage/index";
import LiveFeed from "./components/live-feed/index";
import PostPage from "./components/postPage/index";




class App extends Component {
  render() {
  return (
   <Router>
    
    <div className="App">
      <UserNav />
      <Route exact path="/" component={Home} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/live-feed' component={LiveFeed} />
        <Route path='/post-page' component={PostPage} /> 
        </div>
      
    </div>
 
    </Router>
  );
  }
}

export default App;
