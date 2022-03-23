import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const server = new ApolloServer({   
  typeDefs: typeDefs,
  resolvers });

server.listen(process.env.PORT_BACKEND).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
