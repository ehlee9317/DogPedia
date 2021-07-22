import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DogImage from "./components/DogImage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/breed/:breedName" component={DogImage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
