const pokemon = (parent, { name }, { dataSources }, info) => {
  const { PokedexAPI } = dataSources
  try {
    console.log("pokemon")
    const response = PokedexAPI.getPokemon(name)
    return response
  } catch(error) {
    return { error: "No pokedex found"}
  }
}

export default pokemon
