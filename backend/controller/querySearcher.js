const Axios = require('axios');
const Cheerio = require('cheerio');
const base_url = 'https://search.azlyrics.com/search.php?q=+';

module.exports = async (artist, title) => {
  let response = await Axios.get(base_url + artist + '+' + title);
  let html = await response.data;
  let $ = await Cheerio.load(html);
  let body = $('tbody', 'html').html();
  let startMark = 'https://www.azlyrics.com/lyrics/';
  let endMark = '.html';
  if (typeof body === 'undefined' || body === null) {
    throw new Error('Lyrics not found');
  }
  return body.substring(
    body.indexOf(startMark),
    body.indexOf(endMark) + endMark.length
  );
};
