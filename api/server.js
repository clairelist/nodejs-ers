//I yam the SERVER from which all endpoints are exposed!!
const express = require('express');
const server = express();

server.use(express.json()); //we will be using json after all! yay!!!!

//ROUTERS will go here.

server.get("/", (req, res) => {
    res.json({ api: "up" });
  });
  
  server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
  module.exports = server;