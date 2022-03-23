import { gql } from 'apollo-server'
import Challenge from "./challenge.graphql"

const graphqlTypeDefs =  gql`
  type Query {
    challenges: [Challenge]
    benefits: [Benefit]
  }
`

const typeDefs = [
  graphqlTypeDefs,
  Challenge
]

export default typeDefs
