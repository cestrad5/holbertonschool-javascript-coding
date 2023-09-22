#!/usr/bin/node
// Import the 'fs' (file system) module to work with file operations.
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (error, data) => {
  // Check if an error occurred during reading.
  if (error) {
    // log the error object to the console.
    console.error(error);
    return; // Exit the callback.
  }
  // If no error occurred, log the file content
  console.log(data);
});