import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Activities from "pages/Activities/Activities";
import List from "pages/List/List";

const RoutesApp = () => (
  <Routes>
    <Route path={"/"} component={<Home />} />
    <Route path={"/desafios"} component={<Activities />} />
    <Route path={"/beneficios"} component={<List />} />
  </Routes>
);

export default RoutesApp;
