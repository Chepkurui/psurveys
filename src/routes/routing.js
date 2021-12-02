import React from "react";
import { BrowserRouter, Routes, Switch, Route, Link } from "react-router-dom";

import LayoutView from "../components/layout/layout";

import HomeComponent from "../views/home/home";
import StoreComponent from "../views/store";
import AboutComponent from "../views/about";

export default function RoutesView(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/*<HomeComponent />*/}
          <LayoutView content={<HomeComponent />} />
        </Route>
        <Route path="/store">
          <StoreComponent />
        </Route>
        <Route path="/stores">
          <AboutComponent />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
