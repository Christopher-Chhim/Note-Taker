const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dbPath = path.join(__dirname, '../db.json');

// Read db.json file and return all saved notes as JSON.
router.get("/api/notes", (req, res) => {
    return res.json(notes);
  });

// should receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. You'll need to find a way to give each
// note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/api/notes', (req, res) => {
    const { title } = req.params;
    const { text } = req.body;
    return res.send("POST /api/notes")
})

module.exports = router;