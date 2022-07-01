const pokemon = (parent, { name }, { dataSources }, info) => {
  const { PokedexAPI } = dataSources
  try {
    const response = PokedexAPI.getPokemon(name)
    return response
  } catch(error) {
    return { error: "No pokedex found"}
  }
}

export default pokemon
