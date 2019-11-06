//-----------------
const db = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DATABASE_URL,
    ssl: true
  }
});

module.exports = db;
