
    let url = `https://www.azlyrics.com/lyrics/future/lifeisgood.html`
    const axios = require('axios');
    const cheerio = require('cheerio');
    
    axios.get(url)
    .then(response => {
        const html = response.data 
        const $ = cheerio.load(html)
        let gordon = $('.az-song-text','html').html()
        let uselesShit = "<!-- Usage of azlyrics.com content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->"
        let lyrics = gordon.substring(gordon.indexOf(uselesShit)+uselesShit.length,gordon.indexOf("<!-- MxM banner -->"))
        let lyrics2 = cheerio.load(lyrics).text()
        console.log(lyrics2)

 
    })
    .catch(error => {
        console.log(error);
    })
    
    
    