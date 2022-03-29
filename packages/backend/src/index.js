import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import Music from './data/music'

console.log(resolvers)

const server = new ApolloServer({   
  typeDefs: typeDefs,
  resolvers,
  dataSources: () => ({
    musicAPI: new Music(),
  }), });

server.listen(process.env.PORT_BACKEND).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
