import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChallengesProvider } from "context/ChallengesContext";
import { CountdownProvider } from "context/CountdownContext";

/** componenets */
import NavBar from "components/NavBar/NavBar";
import Footer from "components/Footer/Footer";

/** style */
import * as El from "./Layout.style";

import Home from "pages/Home/Home";
import Activities from "pages/Activities/Activities";
import List from "pages/List/List";
import Music from "pages/Music/Music";

export default () => {
  return (
    <El.Container>
      <ChallengesProvider>
        <CountdownProvider>
          <NavBar />

          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/desafios"} element={<Activities />} />
            <Route path={"/beneficios"} element={<List />} />
            <Route path={"/lyrius"} element={<Music />} />
          </Routes>

          <Footer />
        </CountdownProvider>
      </ChallengesProvider>
    </El.Container>
  );
};
