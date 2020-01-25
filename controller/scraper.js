const url ="https://www.azlyrics.com/lyrics/future/lifeisgood.html"
const axios = require('axios');
const cheerio = require('cheerio');

axios.get(url)
.then(response => {
    const html = response.data 
    //console.log(html)
    const $ = cheerio.load(html)

 console.log(cheerio.text($('body')))

})
.catch(error => {
    console.log(error);
})

