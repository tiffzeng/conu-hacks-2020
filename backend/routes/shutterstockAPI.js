const axios = require('axios');
async function searchImages(req) {
  axios
    .get('https://api.shutterstock.com/v2/images/search?', {
      headers: {
        authorization: `Basic ${process.env.SHUTTERSTOCK_API_TOKEN}`
      },
      params: req.params
    })
    .then(function(response) {
      if (response.total_count === 0) {
        console.log('error');
      }
      return response.data['data'][0];
    })
    .catch(function(error) {
      // handle error
      return error;
    });
}

async function getVideos(req) {
  axios
    .get('https://api.shutterstock.com/v2/videos/search?', {
      headers: {
        authorization: `Basic ${process.env.SHUTTERSTOCK_API_TOKEN}`
      },
      params: req.params
    })
    .then(function(response) {
      if (response.total_count === 0) {
        const image = searchImages(req);
        if (image.total_count === 0) {
          console.log('error');
        }
        return image;
      }
      console.log(response.data['data'][0]);
      return response.data['data'][0];
    })
    .catch(function(error) {
      // handle error
      return error;
    });
}

module.exports.getVideos = getVideos;
