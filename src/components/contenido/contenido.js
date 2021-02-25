import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Discover from "./discover";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >

    <Switch>
      <Route exact path="/" component={() =>     <Discover  />} />
      <Route exact path="/search" component={() => "busqueda"} />
      <Route exact path="/fav" component={() => "FAQ"} />
      <Route exact path="/play" component={() => "play"} />
      <Route exact path="/chart" component={() => "chart"} />
    </Switch>
  </Container>
);

export default Content;
