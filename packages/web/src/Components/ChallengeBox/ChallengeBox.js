import {useContext} from 'react'
import {ChallengesContext} from '../../Context/ChallengesContext'
import {CountdownContext} from '../../Context/CountdownContext'
import Button from '../Button/Button'

import * as El from './ChallengeBox.style'

export default function ChallengeBox(){
    const {activeChallenge,resetChallenge,completedChallenge} = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)
    function handleChallengeSucceeded(){
        completedChallenge()
        resetCountdown()
    }
    function handleChallengeFailes(){
        resetChallenge()
        resetCountdown()
    }

   return(
       <El.ChallengeBoxContainer> 
        {        
            activeChallenge?
            (
                 <El.ChallengeBoxActive>
                     <El.ChallengeBoxTitle>Ganhe {activeChallenge.amount}</El.ChallengeBoxTitle>
                     <El.ChallengeBoxMain>
                         <El.ChallengeBoxSubtitle>Novo Desafio</El.ChallengeBoxSubtitle>
                         <El.ChallengeBoxText>{activeChallenge.description}</El.ChallengeBoxText>
                     </El.ChallengeBoxMain>
                     <El.ChallengeBoxButtons>
                         <Button 
                                color = "white"
                                backgroundColor = "red"
                                height = {3}
                                border = {0}
                                onClick={handleChallengeFailes}
                                >Falhei</Button>

                         <Button 
                            color = "white"
                            backgroundColor = "blue"
                            height = {3}
                            border = {0}
                            onClick={handleChallengeSucceeded}
                         >Completei</Button>
                     </El.ChallengeBoxButtons>
                 </El.ChallengeBoxActive>
            ):(
             <El.ChallengeBoxNotActive>
                 <span>
                     Finalize um ciclo para receber um desafio!
                 </span>
             </El.ChallengeBoxNotActive>
            )
        }    
        </El.ChallengeBoxContainer>
   ) 
}
