import React, { useContext } from 'react';

import { CountdownContext } from 'context/CountdownContext';

import Button from '@monorepo/monorepo-ui/lib/components/Button'
import Timer from '@monorepo/monorepo-ui/lib/components/Timer'

import * as El from './Countdown.style'

export default function Countdown(){
    
    const {minutes,seconds,hasFinished,isActive, startCountdown,resetCountdown} = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,"0").split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,"0").split('')
   
    return(
        <div>
            <Timer 
                minuteLeft={minuteLeft} 
                minuteRight={minuteRight} 
                secondLeft={secondLeft} 
                secondRight={secondRight}/>

            {hasFinished ? ( 
                 <El.Countdown>              
                    <Button
                        isDisabled = {true}
                        color = "title"
                        backgroundColor = "white"
                        height = {5}
                        border = {0}
                    >
                        Ciclo Encerrado
                    </Button>
                </El.Countdown> 
            ):(
                <El.Countdown>
                    { isActive? (
                        <Button 
                            color = "white"
                            backgroundColor = "red"
                            height = {5}
                            border = {0}
                            onClick={resetCountdown}
                        >
                            Abandonar Ciclo
                        
                        </Button>
                    )
                    :
                    (
                        <Button 
                            color = "white"
                            backgroundColor = "blue"
                            height = {5}
                            border = {0}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                        </Button>
                    )}
                </El.Countdown>
            )}
       </div>
    )
}