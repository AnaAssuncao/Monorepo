import { gql } from 'apollo-server'
import Challenge from "./challenge.graphql"
import Music from "./lyrics.graphql"
import Pokedex from "./pokedex.graphql"

const graphqlTypeDefs =  gql`
  type Query {
    challenges: [Challenge]
    benefits: [Benefit]
    lyrics(artist:String, title:String): Music
    pokedex: [Pokedex]
  }
`

const typeDefs = [
  graphqlTypeDefs,
  Challenge,
  Music,
  Pokedex
]

export default typeDefs
