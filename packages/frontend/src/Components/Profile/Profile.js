import React,{ useContext, useEffect, useState } from "react"
import { ChallengesContext } from "../../Context/ChallengesContext"

import * as El from './Profile.style'

export default function Profile(){
    const { level, name, updateName } =useContext(ChallengesContext)

    const [value, setValue] = useState(name)

    const handleValue= (text) =>{
        setValue(text)
      }

    const handleName= (text) =>{
        updateName(text)
    }

    useEffect(()=>{
        setValue(name)
    },[name])
    
    const src = "https://static.vecteezy.com/ti/vetor-gratis/t1/594333-a-cabeca-e-o-rosto-da-forma-alienigena-sao-simples-vetor.jpg"
    return(
        <El.ProfileContainer>
            <El.ProfileImg src={src} alt='imagem'></El.ProfileImg>
            <div>
                <El.ProfileName
                value={value}
                onChange={(e)=>handleValue(e.target.value)}
                onBlur={(e)=>handleName(e.target.value)}></El.ProfileName>
                <El.ProfileLevel>Level {level}</El.ProfileLevel>
            </div>
        </El.ProfileContainer>
    )
}

// mudar nome