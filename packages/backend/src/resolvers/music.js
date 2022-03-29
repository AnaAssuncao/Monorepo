const music = async (parent, { id }, { dataSources }, info) => {
    const { musicAPI } = dataSources
    // info.cacheControl.setCacheHint({ maxAge: 0, scope: 'PUBLIC' })
    try {
      return await musicAPI.getMusic()
    } catch(error) {
      console.log(error)
      return { error: "No lyrics found"}
    }
  }

export default music
