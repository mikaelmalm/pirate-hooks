import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import { HomeView, MapView, LogView, PresentationView } from "./views";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/map/:id" component={MapView} />
        <Route exact path="/log" component={LogView} />
        <Route exact path="/presentation/:id" component={PresentationView} />
      </Switch>
    </Router>
  );
}

export default App;
