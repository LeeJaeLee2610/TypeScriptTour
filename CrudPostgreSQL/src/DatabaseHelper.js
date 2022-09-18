const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "emcuong",
  port: "2610",
});


module.exports = client;
