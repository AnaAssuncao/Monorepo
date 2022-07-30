const listPokemon = (parent, {limit,offset}, { dataSources }, info) => {
  const { PokedexAPI } = dataSources
  try {
    const response = PokedexAPI.getListPokemon(limit,offset)
    return response
  } catch(error) {
    return { error: "No listPokemon found"}
  }
}

export default listPokemon
