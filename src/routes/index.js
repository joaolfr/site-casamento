import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Historias from "../pages/historias";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" initial exact component={Home}></Route>
      <Route path="/historias" initial exact component={Historias}></Route>
    </Switch>
  );
}
