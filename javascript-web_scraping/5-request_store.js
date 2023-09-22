#!/usr/bin/node
// Require the request module to make HTTP GET requests
const request = require('request');
// Import the 'fs' (file system) module to work with file operations.
const fs = require('fs');
// The first argument is the URL to request
const url = process.argv[2];
// The second argument the file path to store the body response
const filePath = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.error(err);
  }

  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
