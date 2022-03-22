import { gql } from 'apollo-server'
import challenges from "./challenges"

const graphqlTypeDefs =  gql`
  type Query {
    challenges: [challenge]
    benefits: [benefit]
  }
`

export const typeDefs = [
  graphqlTypeDefs,
  challenges,
]