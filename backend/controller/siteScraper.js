const axios = require('axios');
const cheerio = require('cheerio');

function querySearcher(artist,songName){
let rawURL = `https://www.google.com/search?q=site:azlyrics.com ${artist}${songName}`
    axios.get(rawURL)
    .then(response => {
        const html = response.data
        console.log(html)
    })    
}


