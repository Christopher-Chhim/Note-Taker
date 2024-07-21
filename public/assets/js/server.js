const express = require('express');
const notes = require('../notes');
const fs = require('fs');
const noteData = require('./db/db.json');
const index = require('./index');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));


// Return the notes.html file
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, 'assets/notes.html'));
  });

// Returns index.html file
app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, 'assets/index.html'));
  });

// Read db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
    return res.json(notes);
  });

// should receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. You'll need to find a way to give each
// note a unique id when it's saved (look into npm packages that could do this for you).
POST /api/notes

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
    res.send(
        `Make a GET request using Insomnia to <a href "http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
    )
);

// Listen for connections
app.listen(PORT, () =>
    console.info(`Note taking app listening at http://localhost:${PORT}`)
);