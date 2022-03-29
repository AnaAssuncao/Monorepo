import challenges  from "./challenge"
import benefits  from "./benefits"
import music from './music'

const resolvers ={
  Query: {
    challenges,
    benefits,
    music
  },
}

export default resolvers