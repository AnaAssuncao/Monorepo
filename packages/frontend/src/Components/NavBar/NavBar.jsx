import React from "react";
// import {arrRoutes} from "../../Routes/Routes"
import {
    Link
} from "react-router-dom";
import * as El from './NavBar.style'

export default function NavBar() {

    return (
        <El.NavBarContainer>
            <El.NavBarLogo>Monorepo</El.NavBarLogo>
            <El.NavBarMenu>

                <El.NavBarItem key={"home"}>
                    <Link to={"/"}>
                        <El.NavBarText>Home</El.NavBarText>
                    </Link>
                </El.NavBarItem>

                <El.NavBarItem key={"desafios"}>
                    <Link to={"/desafios"}>
                        <El.NavBarText>Desafios</El.NavBarText>
                    </Link>
                </El.NavBarItem>

                <El.NavBarItem key={"beneficios"}>
                    <Link to={"/beneficios"}>
                        <El.NavBarText>Benefícios</El.NavBarText>
                    </Link>
                </El.NavBarItem>

                <El.NavBarItem key={"lyrics"}>
                    <Link to={"/lyrics"}>
                        <El.NavBarText>Letra Música</El.NavBarText>
                    </Link>
                </El.NavBarItem>

            </El.NavBarMenu>
        </El.NavBarContainer>
    )

}