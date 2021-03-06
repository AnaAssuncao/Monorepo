import React,{ useContext, useEffect, useState } from "react"
import { ChallengesContext } from 'context/ChallengesContext'
import Avatar  from "@monorepo/monorepo-ui/lib/components/Avatar"
// import Bar  from "@monorepo/monorepo-ui/lib/components/Bar"

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
            <Avatar src={src} width={100} alt='imagem' />
            <div>
                <El.ProfileName
                    value={value}
                    onChange={(e)=>handleValue(e.target.value)}
                    onBlur={(e)=>handleName(e.target.value)}/>
                <El.ProfileLevel>Level {level}</El.ProfileLevel>
            </div>
        </El.ProfileContainer>
    )
}
