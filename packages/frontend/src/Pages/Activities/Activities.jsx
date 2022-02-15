import React, { useContext } from "react";

import { ChallengesContext } from 'context/ChallengesContext'

import * as El from './Activities.style'

const types ={
  Body:"corpo"
}

export default function Activities() {
  const { dataChallenges } = useContext(ChallengesContext)
  const { loading, error, data } = dataChallenges

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

  const listActivities = data.challenges

  return (
      <El.ActivitiesContainer>
        <El.Activities>
            {
                listActivities.map(({type,description, amount},index)=>{
                  return(
                    <El.ActivitiesItem key={index}>
                        <El.ActivitiesTitle>Desafio para o {types[type]}</El.ActivitiesTitle>
                        <El.ActivitiesDescription>{description}</El.ActivitiesDescription>
                        <El.ActivitiesAmount>Pontos: {amount}</El.ActivitiesAmount>
                    </El.ActivitiesItem>
                  )
                })
            }
        </El.Activities>
      </El.ActivitiesContainer>
  )
}
