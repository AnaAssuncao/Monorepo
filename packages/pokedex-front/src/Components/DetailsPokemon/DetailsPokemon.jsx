import React from "react"
import { useQuery, gql } from "@apollo/client";

import * as El from './DetailsPokemon.style'

const DETAILSPOKEMON = gql`
  query Pokemon($name: String) {
    pokemon(name: $name) {
      name
      image
      base_experience
      height
      weight
      type
      abilities {
        ability {
          name
          url
        }
        is_hidden
        slot
      }
      stats {
        base_stat
        effort
        stat {
          name
          url
        }
      }
    }
  }
`;

export default function DetailsPokemon({ namePokemon, handleCloseDetails }) {
  const { loading, error, data } = useQuery(DETAILSPOKEMON, {
    variables: {
      name: namePokemon.toLowerCase()
    }
  })

  if (loading) {
    return (
      <El.ModalMask onClick={handleCloseDetails}>
        <El.Container>
          <El.Banner typePokemon='normal'>
            <El.Title>Carregando!</El.Title>
          </El.Banner>
        </El.Container>
      </El.ModalMask>
    )
  }

  if (error) {
    return (
      <El.ModalMask onClick={handleCloseDetails}>
        <El.Container>
          <El.Banner typePokemon='normal'>
            <El.Title>Infelizmente não encontramos o pokémon {namePokemon}!</El.Title>
            <El.Title>Tente novamente!</El.Title>
            <El.Back onClick={handleCloseDetails} typePokemon='dark'>Voltar</El.Back>
          </El.Banner>
        </El.Container>
      </El.ModalMask>
    );
  }

  const { image, base_experience, height, weight, abilities, type, stats } = data.pokemon

  return (

    <El.ModalMask onClick={handleCloseDetails}>
      <El.Container>
        <El.Content>
          <El.Banner typePokemon={type}>
            <El.Title>{namePokemon.toUpperCase()}</El.Title>
            <El.Image src={image} />
          </El.Banner>

          <El.Details>
            <El.DetailsContent>
              <El.DetailsData>
                {height}m
              </El.DetailsData>
              <El.DetailsText>
                height
              </El.DetailsText>
            </El.DetailsContent>
            <El.DetailsContent>
              <El.DetailsData>
                {weight}kg
              </El.DetailsData>
              <El.DetailsText>
                weight
              </El.DetailsText>
            </El.DetailsContent>
            <El.DetailsContent>
              <El.DetailsData>
                {base_experience}
              </El.DetailsData>
              <El.DetailsText>
                Base Exp
              </El.DetailsText>
            </El.DetailsContent>
          </El.Details>

          <El.Abilities>
            <El.AbilitiesTitle>
              Abilities
            </El.AbilitiesTitle>
            <El.AbilitiesContent>
              {
                abilities.map(({ ability }) => {
                  return <El.AbilitiesName> {ability.name}</El.AbilitiesName>

                })
              }
            </El.AbilitiesContent>
          </El.Abilities>

          <El.Stats>
            <El.StatsTitle>
              Stats
            </El.StatsTitle>
            {
              stats.map(({ base_stat, stat }) => {
                const lowerPercentage = (base_stat / 255) * 100

                return (
                  <El.StatsContent>
                    <El.StatsName> {stat.name}</El.StatsName>
                    <El.StatsProgress>
                      <El.BarContainer>
                        <El.StatsBar width={lowerPercentage} typePokemon={type} />
                      </El.BarContainer>
                      <p>{base_stat}</p>
                    </El.StatsProgress>
                  </El.StatsContent>
                )
              })
            }
          </El.Stats>
          <El.ContainerButton>
            <El.BackButton onClick={handleCloseDetails} typePokemon={type}>Voltar</El.BackButton>
          </El.ContainerButton>
        </El.Content>
      </El.Container>
    </El.ModalMask>
  )
}
