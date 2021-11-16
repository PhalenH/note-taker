// import router from express and fs/uuid packages
const notesRouter = require("express").Router();
const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");
// imports array of objects from db.json
const notes = require("../db/db.json");

// test router /api/feedback/test
notesRouter.get("/test", (req, res) => {
  console.log("notes works");
  res.send("notes works");
});

// GET /api/notes should read the db.json file and return all saved notes as JSON.
notesRouter.get("/", (req, res) => {
  console.info(`${req.method} request received for tips`);
  fs.readFile("./db/db.json", "utf8", (error, data) => {
    error ? console.error(error) : console.log(data);
    res.json(JSON.parse(data));
  });
});
// res.json of the data send results to that
// 19/20 21/22 24 26 28

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
notesRouter.post("/", (req, res) => {
  console.log("notes post api works");
  res.send("notes post api works");

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: uuid,
    };
    //appending newNote object to notes' array of objects
    notes.push(newNote);
    // converts notes array of objects to string, that way it can be used in fs.writeFile as the data input
    const noteString = JSON.stringify(notes);
    console.log(noteString);

    // const response = {
    //   status: "It worked",
    //   body: newNote,
    // };
    // console.log(response);
    // res.status(201).json(response);
  } else {
    res.status(500).json("Error in adding new note");
  }
});
// You'll need to find a way to give each note a !! unique id !! when it's saved
// (look into npm packages that could do this for you)
// nodeJS activity 14 uses appendfile for reference

// export route
module.exports = notesRouter;
