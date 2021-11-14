// importing express, uuid, and fs packages
const express = require("express");
const uuid = require("uuid");
const fs = require("fs");

// imports the current set of reviews (an array of objects)
const reviews = require("./db/reviews.json");
const PORT = process.env.PORT || 3001;
const app = express();

// import our routers from routes
const modRoutes = require('./routes')

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add a static middleware for serving assets in the public folder
app.use(express.static("public"));

// look into activity 20 with data persistance for reference in building post method

app.listen(PORT, () =>
  console.log(`Note taker listening at http://localhost:${PORT}`)
);
