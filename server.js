// importing express, uuid, and fs packages
const express = require("express");
const uuid = require("uuid");
const fs = require("fs");
const path = require('path');

// imports the current array of objects form db.json in db folder
// const db = require("./db/db.json");
const PORT = process.env.PORT || 3001;
const app = express();

// import our routers from routes: './routing' => './routing/index.js'
const modRoutes = require("./routes");

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add a static middleware for serving assets in the public folder and uses all routes made in route folder
app.use(express.static("public"));
app.use(modRoutes);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET Route for index(landing) page
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`Note taker listening at http://localhost:${PORT}`)
);
