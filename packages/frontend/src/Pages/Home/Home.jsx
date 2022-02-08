import React, { useContext, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import Profile from 'components/Profile/Profile'
import CompletedChallenge from 'components/CompletedChallenge/CompletedChallenge'
import Countdown from 'components/Countdown/Countdown'
import ChallengeBox from 'components/ChallengeBox/ChallengeBox'
import ExperienceBar from 'components/ExperienceBar/ExperienceBar'
import { ChallengesContext } from 'context/ChallengesContext'

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

const Home = () => {

  const { loading, error, data } = useQuery(CHALLENGES);
  // console.log('< FERTCH > ', loading, data)
  if (loading) return null

  // const {updateChallenges} = useContext(ChallengesContext)

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
  
    // updateChallenges(data.challenges)

    return (
        <El.HomeContainer>
          HOME
          {/* <ExperienceBar/>
          <El.HomeSection>
            <El.HomeBox>
              <Profile />
              <CompletedChallenge />
              <Countdown />
            </El.HomeBox>
            <El.HomeBox>
              <ChallengeBox/> 
            </El.HomeBox>
          </El.HomeSection> */}
        </El.HomeContainer>
    )

}

export default Home
