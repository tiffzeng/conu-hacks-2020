const natural = require('natural');

const matchLyrics = async (lyrics, duration) => {
  natural.PorterStemmer.attach();
  let processedLyrics = [];
  if (lyrics.length < 20) {
    for (var lyric of lyrics) {
      const processedLyric = {
        lyric: lyric.tokenizeAndStem(),
        duration: duration / lyrics.length
      };

      processedLyrics.push(processedLyric);
    }
  } else {
    for (var i = 0; i < lyrics.length; i += lyrics.length / 20) {
      let twoLyrics = i + 1 >= lyrics.length ? lyrics[i] : lyrics[i] + lyrics[i + 1];

      const processedLyric = {
        lyric: twoLyrics.tokenizeAndStem(),
        duration: duration / lyrics.length / 20
      };
      processedLyrics.push(processedLyric);
    }
  }

  return processedLyrics;
};
exports.matchLyrics = matchLyrics;

/*
const lyrics = [
  'Do you ever feel like a plastic bag',
  'Drifting through the wind, wanting to start again?',
  'Do you ever feel, feel so paper-thin',
  'Like a house of cards, one blow from caving in?'
];
matchLyrics(lyrics, 180).then((res) => {
  console.log(res);
});
*/
