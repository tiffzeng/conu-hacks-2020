import { querySearcher } from './querySearcher.js';
import { getLyrics } from './getLyrics.js';
import { getMetadata } from './getMetadata.js';
import { lyricMatching } from './lyricMatching.js';

getMetadata(1372807).then((data) => {
  querySearcher(data['artist'], data['title']).then((response) => {
    getLyrics(response).then((lyrics) => {
      lyricMatching(lyrics, data['duration']).then((res) => {
        console.log(res);
      });
    });
  });
});
