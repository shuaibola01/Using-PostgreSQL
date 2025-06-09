require("dotenv").config();
const express = require("express");
const { Client } = require("pg");
const app = express();
const port = process.env.PORT || 4000;


const pool = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect().then(() => console.log("connected"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Asiya to The User Management API");
});

app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  res.json(result.rows[0]);
});

app.post("/users", async (req, res) => {
  const { name, email, age } = req.body;
  const result = await pool.query(
    "INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *",
    [name, email, age]
  );
  res.status(201).json(result.rows[0]);
});

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
    [name, email, age, id]
  );
  res.json(result.rows[0]);
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
