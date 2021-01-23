import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Admin from "./page/Admin";

const App: React.FC = (): React.ReactElement => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
    </Switch>
  );
};

export default App;
