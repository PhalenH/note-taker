// import router from express and fs/uuid packages
const notesRouter = require("express").Router();
const { channel } = require("diagnostics_channel");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
// imports array of objects from db.json
let notes = require("../db/db.json");

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

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
notesRouter.post("/", (req, res) => {
  console.log("notes post api works");
  res.send("notes post api works");

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    //appending newNote object to notes' array of objects
    notes.push(newNote);
    // converts notes' array of objects to string, that way it can be used in fs.writeFile as the data input
    const noteString = JSON.stringify(notes);

    // writes new string to the db.json file
    fs.writeFile("./db/db.json", noteString, (err) =>
      err ? console.error(err) : console.info(`New note written to databse!`)
    );

    // const response = {
    //   status: "It worked",
    //   body: newNote,
    // };
    // console.log(response);
    // res.status(201).json(response);
  } //else {
  //   res.status(500).json("Error in adding new note");
  // }
});

// DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete
// notesRouter.delete("/:id", (req, res) => {
//   // console.log(req.params.id);
//   const { id } = req.params;
//   console.log(notes)
//   const deletedNote = notes.find(note => note.note_id === id);
//   if (deletedNote) {
//     afterDeletedNotes = notes.filter((note => note.note_id !== id));
//     // notes.splice(0, notes.length)
//     // notes.push(afterDeletedNotes)
//     const afterDeletedNoteString = JSON.stringify(notes);
//     fs.writeFile("./db/db.json", afterDeletedNoteString, (err) =>
//       err ? console.error(err) : console.info(`New note written to databse!`)
//     );
//     res.status(200).json(deletedNote);
//   } else {
//     res
//       .status(404)
//       .json({ message: "Note not found, no ID matches an existing note." });
//   }
// });

// export route
module.exports = notesRouter;
