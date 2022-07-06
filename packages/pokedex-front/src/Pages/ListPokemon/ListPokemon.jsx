import React from "react";
import { useQuery, gql } from "@apollo/client";

import Button from '@monorepo/monorepo-ui/lib/components/Button'

import * as El from './ListPokemon.style'

const LISTPOKEMON = gql`
  query ListPokemon {
    listPokemon {
      name
      image
      url
      type
    }
  }
`;

export default function List() {
  const { loading, error, data } = useQuery(LISTPOKEMON);

  if (loading) {
    return (
      <El.ListContainer>
        <p>Loading...</p>
      </El.ListContainer>
    )
  }

  if (error) {
    return (
      <El.ListContainer>
        <p>Erro :( </p>
      </El.ListContainer>
    );
  }

  const listPokemon = data.listPokemon

  return (
    <El.ListContainer>
      <El.List>
        {
          listPokemon.map(({ name, image, type }) => {

            return (
              <El.ListItem key={name} typePokemon={type} >
                <El.ListImage src={image} />
                <El.ListTitle>{name}</El.ListTitle>
              </El.ListItem>
            )
          })
        }

        <El.ListButton>
          <Button
            color="white"
            backgroundColor="blue"
            height={3}
            onClick={() => console.log("bora funcionar")}
          >Carregar mais</Button>
        </El.ListButton>
      </El.List>

    </El.ListContainer >
  )
}
