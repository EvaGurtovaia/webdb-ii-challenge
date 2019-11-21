const express = require("express");

const db = require("./data/dbConfig.js");

const CarsRouter = require("./cars-router.js");

const server = express();

server.use(express.json());
server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
    res.send(`
    <h2>Hi!!!</h2>
   
  `);
});

module.exports = server;