import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChallengesProvider } from "context/ChallengesContext";
import { CountdownProvider } from "context/CountdownContext";

import { arrRoutes } from "./Routes";
/** componenets */
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";
/** style */
import * as El from "./Layout.style";

export default () => {
  return (
    <El.Container>
      <ChallengesProvider>
        <CountdownProvider>
          <NavBar />
          {
            <Routes>
              {arrRoutes.map((route) => {
                const { component: Component, path, name, exact } = route;
                return (
                  <Route
                    path={path}
                    key={name}
                    exact={exact}
                    element={Component}
                  />
                );
              })}
            </Routes>
          }
          <Footer />
        </CountdownProvider>
      </ChallengesProvider>
    </El.Container>
  );
};
