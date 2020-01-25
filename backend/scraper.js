const url ="https://www.azlyrics.com/lyrics/future/lifeisgood.html"
const axios = require('axios');
const cheerio = require('cheerio');

axios.get(url)
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.log(error);
})