const axios = require('axios');
require('dotenv').config({ path: '../.env' });

const images_url = 'https://api.shutterstock.com/v2/images/search';
const videos_url = 'https://api.shutterstock.com/v2/videos/search';

module.exports = async (processedLyrics) => {
  let processedLinks = [];

  for (let processedLyric of processedLyrics) {
    let processedLink = {
      link: await getOneVideo(processedLyric['lyric']),
      duration: processedLyric['duration']
    };
    processedLinks.push(processedLink);
  }

  console.log(processedLinks);
  return processedLinks;
};

async function getOneVideo(lyricsArray) {
  let query = lyricsArray.join(' OR ');

  let options = {
    url: videos_url,
    method: 'get',
    headers: { authorization: `Basic ${process.env.SHUTTERSTOCK_API_TOKEN}` },
    params: { query: query }
  };
  let response = await axios(options);
  let data = await response.data;

  if (data['total_count'] === 0) {
    return await getOnePhoto(query);
  }

  let random_video = data['data'][Math.floor(Math.random() * data['data'].length)];
  return random_video['assets']['preview_mp4']['url'];
}

async function getOnePhoto(query) {
  let options = {
    url: images_url,
    method: 'get',
    headers: { authorization: `Basic ${process.env.SHUTTERSTOCK_API_TOKEN}` },
    params: { query: query }
  };

  let response = await axios(options);
  let data = await response.data;

  let random_image = data['data'][Math.floor(Math.random() * data['data'].length)];
  return random_image['assets']['preview_1500']['url'];
}

// const testArray = [
//   {
//     lyric: [
//       'guess', 'neighbor',
//       'think', 'sellin',
//       'dope', 'sellin',
//       'dope'
//     ],
//     duration: 10
//   },
//   {
//     lyric: ['just', 'wanna', 'talk', 'man'
//     ], duration: 10
//   }];
//
// ayy(testArray);
