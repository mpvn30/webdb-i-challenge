const express = require('express');

// const db = require('./data/dbConfig.js');

const Router = require('./data/router/router.js')

const server = express();

server.use(express.json());

server.use("/api/accounts", Router);

server.get('/', (req, res) => {
    res.send('<h3>HELLO WORLD</h3>');
  });

module.exports = server;

/* */