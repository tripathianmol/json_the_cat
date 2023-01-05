const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;

  request(url, (error, response, body) => {
    let desc;
    console.log("the body is", body);
    console.log("the error is", error);

    if (body === []) {
      desc = null;
    } else {
      console.log("the body is in if statement", body);
      desc = JSON.parse(body)[0]["description"];
    }
    
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };