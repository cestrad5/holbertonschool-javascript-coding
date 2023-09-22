#!/usr/bin/node
// Require the request module to make HTTP GET requests
const request = require('request');
// The first argument is the URL to request
const url = process.argv[2];

request(url, (error, response, body) => {
  // handle error
  if (error) {
    console.error(error);
  }

  const ToDoList = JSON.parse(body);
  const doneByUser = {};
  for (const task of ToDoList) {
    const uid = task.userId;
    if (!doneByUser[uid]) {
      doneByUser[uid] = 0;
    }
    if (task.completed === true) {
      doneByUser[uid]++;
    }
  }

  for (const user in doneByUser) {
    if (doneByUser[user] === 0) {
      delete doneByUser[user];
    }
  }

  console.log(doneByUser);
});
