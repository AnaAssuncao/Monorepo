import React,{ createContext,useState,useEffect } from 'react';
// import Cookies from 'js-cookie'


export const ChallengesContext = createContext()

export function ChallengesProvider({children}){
    const [name,setName] =useState("Seu Nome")
    const [level,setLevel] =useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengeCompleted, setChallengeCompleted]= useState(0)
    const [challenges,setChallenges]= useState([])
    
    const [activeChallenge, setActiveChallenge] = useState(null)

    const getExperienceToNextLevel = (level) => Math.pow((level+1)*4,2)

    useEffect(()=>{
        const nameCache = localStorage.getItem("Name") || "Seu Nome"
        setName(nameCache)

        const levelCache = Number(localStorage.getItem("Level")) || 1
        setLevel(levelCache)

        let currentExperienceCache = Number(localStorage.getItem("CurrentExperience")) || 0
        const experience = getExperienceToNextLevel(levelCache)
        if(currentExperienceCache>=experience){
            currentExperienceCache = currentExperienceCache - experience
        }
        setCurrentExperience(currentExperienceCache)

        const challengeCompletedCache = Number(localStorage.getItem("ChallengeCompleted")) || 0
        setChallengeCompleted(challengeCompletedCache)
    },[])

    useEffect(()=>{
        localStorage.setItem('Name', String(name))
    },[name])


    useEffect(()=>{
        localStorage.setItem('Level', String(level))
    },[level])

    useEffect(()=>{
        localStorage.setItem('CurrentExperience', String(currentExperience))
    },[currentExperience])

    useEffect(()=>{
        localStorage.setItem('ChallengeCompleted', String(challengeCompleted))
    },[challengeCompleted])


    useEffect(()=>{
        Notification.requestPermission();
    },[])

    function clearData(){
        localStorage.clear()
        setName("Seu Nome")
        setLevel(1)
        setCurrentExperience(0)
        setChallengeCompleted(0)
    }

    function updateName(text){
        setName(text)
    }

    function updateChallenges(dataChallenges){
        setChallenges(dataChallenges)
    }

    function levelUp(){
        setLevel(level+1)
    }

    function startNewChallenge(){
        const randowChallengeIndex = Math.floor((Math.random()) * challenges.length)
        const challenge = challenges[randowChallengeIndex]
        setActiveChallenge(challenge)

        if(Notification.permission === "granted"){
            new Notification("Novo Desafio", {
                body: `Valendo ${challenge.amount}xp`
            }) 
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completedChallenge(){
        if(!activeChallenge){
            return;
        }
    
        const {amount} = activeChallenge
        let finalExperience = currentExperience + Number(amount)
        const experienceToNextLevel = getExperienceToNextLevel(level)
        while(finalExperience>= experienceToNextLevel){
            finalExperience = finalExperience- experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengeCompleted(challengeCompleted + 1)
    }

    return (
        <ChallengesContext.Provider value={{
            name,
            level,
            currentExperience,
            challengeCompleted,
            activeChallenge,
            getExperienceToNextLevel,
            updateName,
            updateChallenges,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completedChallenge,
            clearData
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}