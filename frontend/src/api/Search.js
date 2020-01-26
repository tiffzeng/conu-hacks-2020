import axios from 'axios';

export async function getSongs(song) {
  try {
    return await axios.get(`/song/search/${song}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getSong(id) {
  try {
    return await axios.get(`/song/${id}`);
  } catch (error) {
    console.log(error);
    return error;
  }
}
