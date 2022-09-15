import React from "react";
import { Link } from "react-router-dom";

import Chikorita from 'imgs/Chikorita.js'
import Mew from 'imgs/Mew.js'

import * as El from './Home.style'

const Home = () => {

  return (
    <El.HomeContainer>
      <El.HomeImg src={Mew} />
      <Link to={"/list"}>
        <El.HomeText>Ir para Lista de Pokemon</El.HomeText>
      </Link>
      <El.HomeImg src={Chikorita} />
    </El.HomeContainer>
  )

}

export default Home
