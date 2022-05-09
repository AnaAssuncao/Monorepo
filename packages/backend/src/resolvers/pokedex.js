const pokedex = async (parent, {limit,offset}, { dataSources }, info) => {
  const { PokedexAPI } = dataSources
  try {
    const response = await PokedexAPI.getPokedex(limit,offset)
    console.log(response.results)
    return response.results
  } catch(error) {
    return { error: "No pokedex found"}
  }
}

export default pokedex
