const querySearcher = require('./querySearcher.js');
const getLyrics = require('./getLyrics.js');
const getMetadata = require('./getMetadata.js');
const lyricMatching = require('./lyricMatching.js');

getMetadata(1372807).then((data) => {
  querySearcher(data['artist'], data['title']).then((response) => {
    getLyrics(response).then((lyrics) => {
      lyricMatching(lyrics, data['duration']).then((res) => {
        console.log(res);
      });
    });
  });
});
