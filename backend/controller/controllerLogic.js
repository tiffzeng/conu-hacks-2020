const querySearcher = require('./querySearcher.js');
const getLyrics = require('./getLyrics.js');
const getMetadata = require('./getMetadata.js');
const lyricMatching = require('./lyricMatching.js');

module.exports = async (songId) => {
  const metadata = await getMetadata(songId);
  const query = await querySearcher(metadata['artist'], metadata['title']);
  const lyrics = await getLyrics(query);
  const response = await lyricMatching(lyrics, metadata['duration']);
  return response;
};
