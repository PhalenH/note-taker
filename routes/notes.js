// import router from express as fs/uuid packages
const notes = require("express").Router();
const fs = require("fs");
const uuid = require("uuid");

// test router /api/feedback/test
notes.get("/test", (req, res) => {
  console.log("notes works");
  res.send("notes works");
});

// export route
module.exports = notes;
