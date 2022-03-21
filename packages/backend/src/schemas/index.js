import typeDefs from '../typeDefs'
import resolvers from '../resolvers'
import { makeExecutableSchema } from 'apollo-server-express';

const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers
})

export default schema;