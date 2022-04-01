import challenges  from "./challenge"
import benefits  from "./benefits"
import lyrics from './lyrics'

const resolvers ={
  Query: {
    challenges,
    benefits,
    lyrics
  },
}

export default resolvers