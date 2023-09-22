#!/usr/bin/node
// Import the 'fs' (file system) module to work with file operations.
const fs = require('fs');
// The first argument is the file path
const filePath = process.argv[2];
// The second argument is the string to write
const strToWrite = process.argv[3];

fs.writeFile(filePath, strToWrite, 'utf-8', (error) => {
  if (error) {
    console.error(error);
  }
});
