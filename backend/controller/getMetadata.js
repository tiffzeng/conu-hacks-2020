import Axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

const songs_url = 'https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/';

export async function getMetadata(songId) {
  try {
    let options = {
      url: songs_url + String(songId),
      method: 'get',
      headers: { authorization: process.env.OCTAVE_GROUP }
    };
    let response = await Axios(options);
    let data = await response.data;

    return {
      title: data['title'],
      artist: data['artist']['name'],
      duration: data['duration'],
      url: data['playUrl']
    };
  } catch (e) {
    // fail quietly
    console.log(e);
  }
}
