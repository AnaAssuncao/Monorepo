import { gql } from 'apollo-server'
import Challenge from "./challenge.graphql"
import Music from "./lyrics.graphql"
import Pokedex from "./pokedex.graphql"

// alterar objeto do pokemon, ver o que precisa e mandar

const graphqlTypeDefs =  gql`
  type Query {
    challenges: [Challenge]
    benefits: [Benefit]
    lyrics(artist:String, title:String): Music
    listPokemon(limit:Int, offset:Int): [ListPokemon]
    pokemon(name:String): Pokemon
  }
`
const typeDefs = [
  graphqlTypeDefs,
  Challenge,
  Music,
  Pokedex
]

export default typeDefs
