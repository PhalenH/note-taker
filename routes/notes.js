// import router from express
const notesRouter = require('express').Router();

// test router /api/feedback/test
notesRouter.get('/test', (req, res)=>{
    console.log("notes works");
    res.send("notes works");
});

// export route
module.exports = notesRouter;