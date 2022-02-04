import React,{ useContext } from "react"
import { ChallengesContext } from "../../Context/ChallengesContext"

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
            <El.ExperienceBarSlider>
                <El.ExperienceBar width= {porcentToNextLevel}>
                    <El.ExperienceBarCurrent left= {`${porcentToNextLevel}%`}>{currentExperience}px</ El.ExperienceBarCurrent>
                </El.ExperienceBar>
            </El.ExperienceBarSlider>
            <El.ExperienceBarText>
                {experienceToNextLevel}px
            </El.ExperienceBarText>
        </ El.ExperienceBarContainer>   
    )
}

