import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import Lyrics from './data/lyrics'
import Pokedex from './data/pokedex'

const server = new ApolloServer({   
  typeDefs: typeDefs,
  resolvers,
  dataSources: () => ({
    lyricsAPI: new Lyrics(),
    PokedexAPI: new Pokedex()
  }), });

server.listen(process.env.PORT_BACKEND).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
