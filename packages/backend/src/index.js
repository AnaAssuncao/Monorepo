import { ApolloServer } from 'apollo-server'
import schema from './schema'

const server = new ApolloServer({ schema });

server.listen(process.env.PORT_BACKEND).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
