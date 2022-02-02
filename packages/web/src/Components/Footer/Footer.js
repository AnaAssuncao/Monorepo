import { useContext } from "react"
import { ChallengesContext } from "../../Context/ChallengesContext"
import Button from "../Button/Button"

import * as El from './Footer.style'
import {arrRoutes} from "../../Routes/Routes"
import {
    Link
  } from "react-router-dom";

  

export default function Footer (){

    const { clearData } =useContext(ChallengesContext)

    const handleData = () =>{
        clearData()
    }

    return(
        <El.FooterContainer>
            <El.FooterMenu>
                {arrRoutes.map(({name,path})=>{
                    return(
                        <El.FooterItem key={name}>
                            <Link to={path}>
                                <El.FooterText>{name}</El.FooterText>
                            </Link>
                        </El.FooterItem>
                    )
                })}
            </El.FooterMenu>
            <El.FooterButton>
                <Button 
                    color = "title"
                    backgroundColor = "white"
                    height = {3}
                    border = {0}
                    onClick={()=>handleData()}
                    >
                        Limpar Dados
                </Button>
            </El.FooterButton>
        </El.FooterContainer>
    )

}