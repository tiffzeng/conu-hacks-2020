const querySearcher = require('./querySearcher.js');
const getLyrics = require('./getLyrics.js');
const getMetadata = require('./getMetadata.js');
const lyricMatching = require('./lyricMatching.js');
const mediaMatching = require('./mediaMatching.js');

module.exports = async (songId) => {
  const metadata = await getMetadata(songId);
  const query = await querySearcher(metadata['artist'], metadata['title']);
  const lyrics = await getLyrics(query);
  const lyricMatches = await lyricMatching(lyrics, metadata['duration']);
  let response = await mediaMatching(lyricMatches);
  response.push(metadata['url']);
  return response;
};
