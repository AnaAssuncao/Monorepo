import { RESTDataSource } from 'apollo-datasource-rest'

class Pokedex extends RESTDataSource {
  constructor() {
    super()
    this.baseURL ="https://pokeapi.co/api/v2/pokemon"
  }

  getPokedex(limit=20,offset=20) {
    return this.get(`?limit=${limit}&offset=${offset}`);
  }
}

export default Pokedex