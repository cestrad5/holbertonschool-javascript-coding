#!/usr/bin/node
// Require the request module to make HTTP GET requests
const request = require('request');
//The first argument is the movie ID
const id = process.argv[2];
// Access the command-line argument, which is the URL to request
const url = 'https://swapi-api.hbtn.io/api/films/' + id;

request(url, (err, response, body) => {
  //handle error
  if (err) {
    console.error(err);
  }
  const movie = JSON.parse(body);
  console.log(movie.title);
});
