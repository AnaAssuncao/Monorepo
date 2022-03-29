import { RESTDataSource } from 'apollo-datasource-rest'
import music from '../resolvers/music';

class Music extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://api.lyrics.ovh/v1/'
  }

  async getMusic(artist,title) {
    const response = await this.get(`${artist}/${title}`);
    return  response
  }
}

export default Music