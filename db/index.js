require("dotenv").config();
const { Client } = require("pg");

const pool = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1);
  });

module.exports = pool;
