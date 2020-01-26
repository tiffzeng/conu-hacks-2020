const natural = require('natural');

module.exports = async (lyrics, duration) => {
  natural.PorterStemmer.attach();
  let processedLyrics = [];
  if (lyrics.length < 20) {
    for (let lyric of lyrics) {
      const processedLyric = {
        lyric: lyric.tokenizeAndStem(),
        duration: duration / lyrics.length
      };

      processedLyrics.push(processedLyric);
    }
  } else {
    let inc = Math.floor(lyrics.length / 20);
    let lyric;
    for (let i = 0; i < lyrics.length; i += inc) {
      if (i >= lyrics.length) {
        break;
      }
      lyric = lyrics[i];
      const processedLyric = {
        lyric: await lyric.tokenizeAndStem(),
        duration: Math.floor(duration / 20)
      };
      processedLyrics.push(processedLyric);
    }
  }
  console.log(processedLyrics);
  return processedLyrics;
};
