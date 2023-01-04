const request = require('request');

let breedName = process.argv.slice(2)[0].toLowerCase();

let url = `https://api.thecatapi.com/v1/breeds/search?name=${breedName}`;
let reqBody;

request(url, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error) {
    console.log(error);
  } else {
    if (body === []) {
      reqBody = undefined;
      console.log("Breed not found.");
    } else {
      reqBody = JSON.parse(body);
      console.log(reqBody[0].description);
    }
  }
});
