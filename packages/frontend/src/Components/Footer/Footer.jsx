import React, { useContext } from "react"
import { Link } from "react-router-dom";

import { ChallengesContext } from "context/ChallengesContext"

import Button from "@monorepo/monorepo-ui/lib/components/Button"

import * as El from './Footer.style'

export default function Footer() {

    const { clearData } = useContext(ChallengesContext)

    const handleData = () => {
        clearData()
    }

    return (
        <El.FooterContainer>
            <El.FooterMenu>

                <El.FooterItem key={"home"}>
                    <Link to={"/"}>
                        <El.FooterText>Home</El.FooterText>
                    </Link>
                </El.FooterItem>

                <El.FooterItem key={"desafios"}>
                    <Link to={"/desafios"}>
                        <El.FooterText>Desafios</El.FooterText>
                    </Link>
                </El.FooterItem>

                <El.FooterItem key={"beneficios"}>
                    <Link to={"/beneficios"}>
                        <El.FooterText>Benefícios</El.FooterText>
                    </Link>
                </El.FooterItem>

                <El.FooterItem key={"lyrics"}>
                    <Link to={"/lyrics"}>
                        <El.FooterText>Letra Música</El.FooterText>
                    </Link>
                </El.FooterItem>

            </El.FooterMenu>

            <El.FooterButton>
                <Button
                    color="title"
                    backgroundColor="white"
                    height={3}
                    border={0}
                    onClick={() => handleData()}
                >
                    Limpar Dados
                </Button>
            </El.FooterButton>

        </El.FooterContainer>
    )

}