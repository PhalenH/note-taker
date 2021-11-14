const express = require("express");

// Import our modular routers for /notesRouter
const notesRouter = require("./notesRouter");

const miniapp = express.Router();

miniapp.use("/api/notes", notesRouter);

// exports mini app which exports url /api/notes, why is notes we don't need full url path
module.exports = miniapp;
