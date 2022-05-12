import challenges  from "./challenge"
import benefits  from "./benefits"
import lyrics from './lyrics'
import listPokemon from './listPokemon'
import pokemon from './pokemon'

const resolvers ={
  Query: {
    challenges,
    benefits,
    lyrics,
    listPokemon,
    pokemon
  }
}

export default resolvers