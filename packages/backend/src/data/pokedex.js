import { RESTDataSource } from 'apollo-datasource-rest'

class Pokedex extends RESTDataSource {
  constructor() {
    super()
    this.baseURL ="https://pokeapi.co/api/v2/pokemon"
  }

  async getListPokemon(limit=20,offset=20) {
    
    const response = await this.get(`?limit=${limit}&offset=${offset}`);
    console.log("<response>",response)
    const listPokemon = await Promise.all( response.results.map(async (pokemonInfo) => {
      const pokemon = await this.getPokemon(pokemonInfo.name)
      pokemonInfo.image = pokemon.image
      return pokemonInfo
    }))
    return listPokemon
  }

  async getPokemon(name){
    const response = await this.get(`/${name}`);
    const pokemon ={
      name: response.name,
      image: response.sprites?.front_default,
      base_experience:response.base_experience,
      height:response.height,
      weight:response.weight,
      abilities:response.abilities,
      stats:response.stats,
      type: response.types?.[0]?.type?.name
    }
   
    return pokemon
  }
}

export default Pokedex