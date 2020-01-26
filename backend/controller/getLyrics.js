// let url = `https://www.azlyrics.com/lyrics/future/lifeisgood.html`;
import Axios from 'axios';
import Cheerio from 'cheerio';
// const cheerio = require('cheerio');

export async function getLyrics(url) {
  try {
    let response = await Axios.get(url);
    let html = await response.data;
    let $ = await Cheerio.load(html);
    let body = $('.az-song-text', 'html').html();
    let startMark =
      '<!-- Usage of azlyrics.com content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->';
    let endMark = '<!-- MxM banner -->';
    let htmlLyrics = body.substring(
      body.indexOf(startMark) + startMark.length,
      body.indexOf(endMark)
    );
    let lyrics = await Cheerio.load(htmlLyrics).text();
    let lyricsArray = await lyrics.split('\n');
    return await lyricsArray.filter(
      (line) => line.length > 0 && line.indexOf('[') !== 0
    );
  } catch (e) {
    // fail quietly
    console.log(e);
  }
}

// getLyrics().then((r) => {
//   console.log(r);
// });

// exports.getLyrics = getLyrics;
