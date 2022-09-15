import React from "react";
import { Link } from "react-router-dom";

import * as El from './NavBar.style'

import Pokebola from 'imgs/Pokebola.js'

export default function NavBar() {

    return (
        <El.NavBarContainer>
            <Link to={"/"}>
                <El.NavBarContent>
                    <El.NavBarImg src={Pokebola} />
                    <El.NavBarLogo>Pokedex</El.NavBarLogo>
                </El.NavBarContent>
            </Link>
        </El.NavBarContainer>
    )

}