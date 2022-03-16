const express = require("express");
const path = require("path");
const fs = require("fs");
//const util = require("util");
const app = express();
const PORT = process.env.PORT || 3017;

const api = require('./routes/api.js');
const html = require('./routes/html.js');
//GET API db.json
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/db/db.json"))
});

// Post function to add new notes to db.json
app.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(notes))
    res.json(notes);
});

//used for deleting notes
app.delete("/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./Develop/db/db.json"));
    const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(delNote));
    res.json(delNote);
})

//Start listen
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

module.exports={postDb, deleteDb};