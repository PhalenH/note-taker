// importing express and fs packages
const express = require('express');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));











app.listen(PORT, () =>
  console.log(`Note taker listening at http://localhost:${PORT}`)
);