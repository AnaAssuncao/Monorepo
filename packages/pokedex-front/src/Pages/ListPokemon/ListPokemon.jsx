import React, { useState } from "react";
import { useQuery, gql, NetworkStatus } from "@apollo/client";

import DetailsPokemon from 'components/DetailsPokemon/DetailsPokemon'

import Button from '@monorepo/monorepo-ui/lib/components/Button'

import * as El from './ListPokemon.style'

const LISTPOKEMON = gql`
  query ListPokemon($offset: Int, $limit: Int) {
    listPokemon(offset: $offset, limit: $limit) {
      name
      image
      url
      type
    }
  }
`;

export default function List() {
  const limit = 20
  const [page, setPage] = useState(0)
  const [details, setDetails] = useState({ open: false, name: null })

  const { loading, error, data, refetch, networkStatus } = useQuery(LISTPOKEMON, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit: 20
    }
  })

  if (loading || networkStatus === NetworkStatus.refetch) {
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

  const changePage = (newPage) => {
    const newNumberPage = Number(page) + Number(newPage)

    refetch({ offset: limit * newNumberPage })
    setPage(newNumberPage)
  }

  const handleDetailsOpen = (name) => {
    setDetails(
      {
        open: true,
        name: name
      }
    )
  }

  const handleCloseDetails = () => {
    setDetails(
      {
        open: false,
        name: null
      }
    )
  }


  return (
    <El.ListContainer>
      <El.List>
        {
          listPokemon.map(({ name, image, type }) => {

            return (
              <El.ListItem key={name} typePokemon={type} onClick={() => { handleDetailsOpen(name) }}>
                <div>
                  <El.ListTitle>{name.toUpperCase()}</El.ListTitle>
                  <El.ListType>{type}</El.ListType>
                </ div>
                <El.ListImage src={image} />
              </El.ListItem>
            )
          })
        }
      </El.List>

      <El.ListButton>
        {
          page > 0 &&
          <El.ContainerButton>
            <Button
              color="white"
              backgroundColor="blue"
              height={3}
              onClick={() => changePage(-1)}
            >Voltar</Button>
          </El.ContainerButton>

        }
        <El.ContainerButton>
          <Button
            color="white"
            backgroundColor="blue"
            height={3}
            onClick={() => changePage(1)}
          >Proxima</Button></El.ContainerButton>
      </El.ListButton>

      {
        details.open &&
        <DetailsPokemon namePokemon={details.name} handleCloseDetails={handleCloseDetails} />
      }

    </El.ListContainer >
  )
}
