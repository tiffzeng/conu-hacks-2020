const Axios = require('axios');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const songs_url = 'https://conuhacks-2020.tsp.cld.touchtunes.com/v1/songs/';

const getMetadata = async (songId) => {
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
};

exports.getMetadata = getMetadata;
