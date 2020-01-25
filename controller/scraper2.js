
    let url = `https://www.azlyrics.com/lyrics/future/lifeisgood.html`
    const axios = require('axios');
    const cheerio = require('cheerio');
    
    axios.get(url)
    .then(response => {
        const html = response.data 
        //console.log(html)
        const $ = cheerio.load(html)
        let rawString = cheerio.text($('body'))
        var pos = rawString.search("\"Life Is Good\"");
        var pos2 = rawString.search("Submit Corrections")
        var String2 = rawString.substring(pos,pos2).trim()
        console.log(String2)
 
    })
    .catch(error => {
        console.log(error);
    })
    
    
    