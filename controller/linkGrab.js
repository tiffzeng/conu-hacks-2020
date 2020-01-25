var scraper = require('google-search-scraper');
 
var options = {
  query: 'site:azlyrics.com j.cole neighbours',
  host: 'www.google.ca',
  limit: 1
};
scraper.search(options, function(err, url, meta) {
    // This is called for each result
    if(err) throw err;
    console.log(url);
    console.log(meta.title);
    console.log(meta.meta);
    console.log(meta.desc)
  });