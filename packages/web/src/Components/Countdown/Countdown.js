import { useContext } from 'react';
import { CountdownContext } from '../../Context/CountdownContext';
import Button from '../Button/Button'

import * as El from './Countdown.style'

export default function Countdown(){
    
    const {minutes,seconds,hasFinished,isActive, startCountdown,resetCountdown} = useContext(CountdownContext)
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,"0").split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2,"0").split('')
   
    return(
        <div>
            <El.Countdown>
                <El.CountdownTime>
                    <El.CountdownNumber>{minuteLeft}</El.CountdownNumber>
                    <El.CountdownNumber>{minuteRight}</El.CountdownNumber>
                </El.CountdownTime>
                <El.CountdownText>:</El.CountdownText>
                <El.CountdownTime>
                    <El.CountdownNumber>{secondLeft}</El.CountdownNumber>
                    <El.CountdownNumber>{secondRight}</El.CountdownNumber>
                </El.CountdownTime>
            </El.Countdown>

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