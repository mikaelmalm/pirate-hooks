import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import { HomeView, MapView, LogView } from "./views";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/map/:id" component={MapView} />
        <Route exact path="/log" component={LogView} />
      </Switch>
    </Router>
  );
}

export default App;
