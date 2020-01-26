const axios = require('axios');
const cheerio = require('cheerio');
const base_url = 'https://search.azlyrics.com/search.php?q=+';

async function querySearcher(artist, title) {
  try {
    let response = await axios.get(base_url + artist + '+' + title);
    let html = await response.data;
    let $ = await cheerio.load(html);
    let body = $('tbody', 'html').html();
    let startMark = 'https://www.azlyrics.com/lyrics/';
    let endMark = '.html';
    return await body.substring(
      body.indexOf(startMark),
      body.indexOf(endMark) + endMark.length
    );
  } catch (e) {
    // fail quietly
    console.log(e);
  }
}

// querySearcher("j. cole", "neighbors").then((r) => {
//   console.log(r);
// });
