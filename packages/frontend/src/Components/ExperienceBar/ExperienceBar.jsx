import React,{ useContext } from "react"

import { ChallengesContext } from "context/ChallengesContext"

import Bar from '@monorepo/monorepo-ui/lib/components/Bar'

import * as El from './ExperienceBar.style'

export default function ExperienceBar(){
    const { level, currentExperience,getExperienceToNextLevel } =useContext(ChallengesContext)
    const experienceToNextLevel = getExperienceToNextLevel(level)
    const porcentToNextLevel = Math.round((currentExperience*100)/experienceToNextLevel)
    
    return(
        <El.ExperienceBarContainer>
            <El.ExperienceBarText>
                0px
            </El.ExperienceBarText>

            <Bar width= {porcentToNextLevel} left= {porcentToNextLevel} value={currentExperience} />

            <El.ExperienceBarText>
                {experienceToNextLevel}px
            </El.ExperienceBarText>
        </ El.ExperienceBarContainer>   
    )
}

