import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Register from "./components/layout/Register";
class App extends Component {
  render() {
    return (
      
      <div className="App">
          <Router>

        <Navbar />
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/register"component={Register}></Route>
        </Router>

      </div>
      
    );
  }
}
export default App;