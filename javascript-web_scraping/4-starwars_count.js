#!/usr/bin/node
// Require the request module to make HTTP GET requests
const request = require('request');
// The first argument is the movie ID
const url = process.argv[2];

request(url, (error, response, body) => {
  // handle error
  if (error) {
    console.error(error);
  } else {
    let appearancesCount = 0;
    const movies = JSON.parse(body).results;
    for (const movie of movies) {
      for (const character of movie.characters) {
        if (character.includes('/18/')) {
          appearancesCount++;
        }
      }
    }
    console.log(appearancesCount);
  }
});
