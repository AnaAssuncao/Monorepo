import React from "react";
import { Routes, Route } from "react-router-dom";

/** style */
import * as El from "./Layout.style";

import Home from "pages/Home/Home";
import ListPokemon from "pages/ListPokemon/ListPokemon";
import NavBar from "components/NavBar/NavBar";

export default () => {
  return (
    <El.Container>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/list"} element={<ListPokemon />} />
      </Routes>

    </El.Container>
  );
};
