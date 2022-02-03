import React from "react";
import { useQuery, gql } from "@apollo/client";

import * as El from './List.style'

const CHALLENGES = gql`
  query Query {
    benefits{
        title
        description
    }
  }
`;

export default function List() {
  const { loading, error, data } = useQuery(CHALLENGES);

  if (loading) {
  return (
    <El.ListContainer>
       <p>Loading...</p>
    </El.ListContainer>
  )}
  
  if (error) {

    return (
      <El.ListContainer>
      <p>Erro :( </p>
    </El.ListContainer>
    );
  }

  const listBenefits = data.benefits

  return (
      <El.ListContainer>
        <El.List>
            {
                listBenefits.map(({title,description})=>{
                  return(
                    <El.ListItem key={title}>
                        <El.ListTitle>{title}</El.ListTitle>
                        <El.ListDescription>{description}</El.ListDescription>
                    </El.ListItem>
                  )
                })
            }
        </El.List>
      </El.ListContainer>
  )
}
