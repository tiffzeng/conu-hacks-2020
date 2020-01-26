import { querySearcher } from './querySearcher.js';
import { getLyrics } from './getLyrics.js';

querySearcher('j. cole', 'neighbors').then((response) => {
  getLyrics(response).then((lyrics) => {
    console.log(lyrics);
  });
});
