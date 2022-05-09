import challenges  from "./challenge"
import benefits  from "./benefits"
import lyrics from './lyrics'
import pokedex from './pokedex'

const resolvers ={
  Query: {
    challenges,
    benefits,
    lyrics,
    pokedex,
  }
}

export default resolvers