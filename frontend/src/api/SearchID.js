import axios from "axios";

export async function getIDS(id) {

  try {
    return await axios.get(`/song/info/${id}`);
  } catch (error) {
    console.error(error);
  }
}
