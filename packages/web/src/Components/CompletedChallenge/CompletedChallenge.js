import { useContext } from "react"
import { ChallengesContext } from "../../Context/ChallengesContext"

import * as El from './CompletedChallenge.style'

export default function CompletedChallenge(){
    const { challengeCompleted } =useContext(ChallengesContext)

    return(
        <El.CompletedChallengeContainer>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </El.CompletedChallengeContainer>
    )
}
