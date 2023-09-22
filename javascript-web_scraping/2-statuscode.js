#!/usr/bin/node
// Access the command-line argument, which is the URL to request
const url = process.argv[2];
// Require the request module to make HTTP GET requests
const request = require('request');

request(url, (error, response) => {
  // handle error
  if (error) {
    console.error(error);
  } else {
    console.log('code:', response.statusCode);
  }
});
