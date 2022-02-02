import { createContext,useState,useContext,useEffect } from 'react';
import { ChallengesContext } from './ChallengesContext';

export const CountdownContext = createContext()

export function CountdownProvider({children}){
    const { startNewChallenge } = useContext(ChallengesContext)

    const timeInitial = 25
    const [time, setTime ] = useState(timeInitial*60)
    const [isActive, setIsActive ] = useState(false)
    const [hasFinished,setHasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        setIsActive(false);
        setTime(timeInitial*60)
        setHasFinished(false)
    }
    
    useEffect(()=>{
        if(isActive && time>0){
            setTimeout(()=>{
                if(isActive && time>0){
                    setTime(time-1)
                }
            },1000)
        }
        else if (isActive && time===0){
            setIsActive(false)
            setHasFinished(true)
            startNewChallenge()
        }
    }, [isActive,time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}