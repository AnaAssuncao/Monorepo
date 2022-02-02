import { useContext } from "react"
import { ChallengesContext } from "../../Context/ChallengesContext"
import Button from '../Button/Button'

import * as El from './LevelUpModal.style'

export default function LevelUpModal(){
    const { level,closeLevelUpModal } = useContext(ChallengesContext)
    return (
        <El.Overlay>      
            <El.LevelUpContainer>
                <El.LevelUpTitle>{level}</El.LevelUpTitle>
                <El.LevelUpTSubtitle>Parabéns</El.LevelUpTSubtitle>
                <p>Você alcançou um novo level. </p>
                 <Button 
                    color = "title"
                    backgroundColor = "white"
                    height = {3}
                    border = {0}
                    onClick={closeLevelUpModal}>
                    X
                </Button>
            </El.LevelUpContainer>
        </El.Overlay>

    )
}