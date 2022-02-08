import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChallengesProvider } from "context/ChallengesContext";
import { CountdownProvider } from "context/CountdownContext";

import RoutesApp from "./Routes";
/** componenets */
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
/** style */
import * as El from "./Layout.style";

import Home from "pages/Home/Home";
import Activities from "pages/Activities/Activities";
import List from "pages/List/List";

export default () => {
  return (
    <El.Container>
      {/* <ChallengesProvider> */}
      {/* <CountdownProvider> */}
      <NavBar />

      <Routes>
        <Route path={"/"} component={<Home />} />
        <Route path={"/desafios"} component={<Activities />} />
        <Route path={"/beneficios"} component={<List />} />
      </Routes>

      {/* <Routes>{buildRoutes()}</Routes> */}
      {/* <Routes>
            {arrRoutes.map((route) => {
              const { component: Component, path, name } = route;
              return <Route path={path} key={name} element={Component} />;
            })}
          </Routes> */}

      {/* <Footer /> */}
      {/* </CountdownProvider> */}
      {/* </ChallengesProvider> */}
    </El.Container>
  );
};
