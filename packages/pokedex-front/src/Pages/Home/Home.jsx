import React from "react";
import { Link } from "react-router-dom";

import * as El from './Home.style'

const Home = () => {

  return (
    <El.HomeContainer>

      <Link to={"/list"}>
        <El.HomeText>Ir para Lista de Pokemon</El.HomeText>
      </Link>

    </El.HomeContainer>
  )

}

export default Home
