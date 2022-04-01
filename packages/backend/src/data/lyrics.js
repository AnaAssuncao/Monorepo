import { RESTDataSource } from 'apollo-datasource-rest'

class Lyrics extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.lyrics.ovh/v1/'
  }

  getLyrics(artist,title) {
    return this.get(`${artist}/${title}`);
  }
}

export default Lyrics