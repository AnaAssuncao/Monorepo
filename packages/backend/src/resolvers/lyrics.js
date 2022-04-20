const lyrics = async (parent, { artist,title }, { dataSources }, info) => {
    const { lyricsAPI } = dataSources
    try {
      const response = await lyricsAPI.getLyrics(artist,title)
      return response
    } catch(error) {
      return { error: "No lyrics found"}
    }
  }

export default lyrics
