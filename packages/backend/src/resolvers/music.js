const music = async (parent, { artist,title }, { dataSources }, info) => {
    const { musicAPI } = dataSources
    try {
      return await musicAPI.getMusic(artist,title)
    } catch(error) {
      return { error: "No lyrics found"}
    }
  }

export default music
