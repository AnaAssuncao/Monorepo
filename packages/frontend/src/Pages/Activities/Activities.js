import React from "react";
import { useQuery, gql } from "@apollo/client";

import * as El from './Activities.style'

const types ={
  Body:"corpo"
}

const CHALLENGES = gql`
  query Query {
    challenges{
      type
      description
      amount
    }
  }
`;

export default function Activities() {
  const { loading, error, data } = useQuery(CHALLENGES);

  if (loading) {
  return (
    <El.ActivitiesContainer>
       <p>Loading...</p>
    </El.ActivitiesContainer>
  )}
  
  if (error) {

    return (
      <El.ActivitiesContainer>
      <p>Erro :( </p>
    </El.ActivitiesContainer>
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
