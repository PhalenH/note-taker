// import router from express as fs/uuid packages
const notes = require("express").Router();
const fs = require("fs");
const uuid = require("uuid");

// test router /api/feedback/test
notes.get("/test", (req, res) => {
  console.log("notes works");
  res.send("notes works");
});

// GET /api/notes should read the db.json file and return all saved notes as JSON.
notes.get("/api/notes", (req, res) => {
  console.log("notes api works");
  res.send("notes api works");
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
notes.post("/api/notes", (req, res) =>{
    
})
// You'll need to find a way to give each note a !! unique id !! when it's saved
// (look into npm packages that could do this for you)

// export route
module.exports = notes;
