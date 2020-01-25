function scrapelyrics(artist,songName){


let url = `https://www.azlyrics.com/lyrics/${artist}/${songName}.html`
const axios = require('axios');
const cheerio = require('cheerio');

axios.get(url)
.then(response => {
    const html = response.data 
    //console.log(html)
    const $ = cheerio.load(html)
    let rawString = cheerio.text($('body'))
    var pos = rawString.search("\"" + songName+ "\"");
    var pos2 = rawString.search("Submit Corrections")
 console.log(rawString.substring(pos,pos2))

})
.catch(error => {
    console.log(error);
})

}
