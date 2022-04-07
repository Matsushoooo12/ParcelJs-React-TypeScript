import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
};
