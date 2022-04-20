import React, { useContext } from "react";

import Profile from 'components/Profile/Profile'
import CompletedChallenge from 'components/CompletedChallenge/CompletedChallenge'
import Countdown from 'components/Countdown/Countdown'
import ChallengeBox from 'components/ChallengeBox/ChallengeBox'
import ExperienceBar from 'components/ExperienceBar/ExperienceBar'

import { ChallengesContext } from 'context/ChallengesContext'

import * as El from './Home.style'

const Home = () => {

  const { dataChallenges } = useContext(ChallengesContext)
  const { loading, error } = dataChallenges

  if (loading) {
    return (
      <El.HomeContainer>
        <p>Loading...</p>
      </El.HomeContainer>
    )
  }

  if (error) {
    return (
      <El.HomeContainer>
        <p>Erro :( </p>
      </El.HomeContainer>
    );
  }

  return (
    <El.HomeContainer>
      <ExperienceBar />
      <El.HomeSection>
        <El.HomeBox>
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </El.HomeBox>
        <El.HomeBox>
          <ChallengeBox />
        </El.HomeBox>
      </El.HomeSection>
    </El.HomeContainer>
  )

}

export default Home
