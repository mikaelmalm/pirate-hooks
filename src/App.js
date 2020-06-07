import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";

import { HomeView, MapView } from "./views";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/map/:id" component={MapView} />
      </Switch>
    </Router>
  );
}

export default App;
