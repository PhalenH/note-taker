// Import our modular routers for /notesRouter and router from express
const miniapp = require("express").Router();
const notesRouter = require("./notesRouter");

// adds routes using this url
miniapp.use("/api/notes", notesRouter);

// exports mini app which exports url /api/notes, why is notes we don't need full url path in notesRouter.js
module.exports = miniapp;
