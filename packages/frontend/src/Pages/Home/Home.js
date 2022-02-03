import React, { useContext, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import Profile from '../../Components/Profile/Profile'
import CompletedChallenge from '../../Components/CompletedChallenge/CompletedChallenge'
import Countdown from '../../Components/Countdown/Countdown'
import ChallengeBox from '../../Components/ChallengeBox/ChallengeBox'
import ExperienceBar from '../../Components/ExperienceBar/ExperienceBar'
import { ChallengesContext } from '../../Context/ChallengesContext'

import * as El from './Home.style'

const CHALLENGES = gql`
  query Query {
    challenges{
      type
      description
      amount
    }
  }
`;

export default function Home() {
  debugger
  const {updateChallenges} = useContext(ChallengesContext)

    const { loading, error, data } = useQuery(CHALLENGES);

    if (loading) {
    return (
      <El.HomeContainer>
         <p>Loading...</p>
      </El.HomeContainer>
    )}
    
    if (error) {
      return (
        <El.HomeContainer>
        <p>Erro :( </p>
      </El.HomeContainer>
      );
    }
  
    useEffect(()=>{
      updateChallenges(data.challenges)
    },[data.challenges])

  
    return (
        <El.HomeContainer>
          <ExperienceBar/>
          <El.HomeSection>
            <El.HomeBox>
              <Profile />
              <CompletedChallenge />
              <Countdown />
            </El.HomeBox>
            <El.HomeBox>
              <ChallengeBox/> 
            </El.HomeBox>
          </El.HomeSection>
        </El.HomeContainer>
    )

}
