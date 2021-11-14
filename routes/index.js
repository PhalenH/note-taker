const express = require("express");

// Import our modular routers for /notes
const notesRouter = require("./notes");

const miniapp = express.Router();

miniapp.use("/api/notes", notesRouter);

module.exports = miniapp;
