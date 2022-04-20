import { gql } from 'apollo-server'
import Challenge from "./challenge.graphql"
import Music from "./lyrics.graphql"

const graphqlTypeDefs =  gql`
  type Query {
    challenges: [Challenge]
    benefits: [Benefit]
    lyrics(artist:String, title:String): Music
  }
`

const typeDefs = [
  graphqlTypeDefs,
  Challenge,
  Music
]

export default typeDefs
