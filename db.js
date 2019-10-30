//-----------------
const db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "hopepath",
    database: "planet_spinach"
  }
});

module.exports = db;
