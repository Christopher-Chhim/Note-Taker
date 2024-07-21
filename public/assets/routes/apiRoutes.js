const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');



// Read db.json file and return all saved notes as JSON.
router.get("/api/notes", (req, res) => {
    const dbPath = path.join(__dirname, '../db/db.json');

    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read notes' });
        } try {
            const notes = JSON.parse(data);
            return res.json(notes);
        } catch (parseErr) {
            console.err("Error parsing JSON: ", parseErr);
            return res.status(500).json({ error: 'Failed to parse notes' });
        }   
    });
  });

// should receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. You'll need to find a way to give each
// note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/api/notes', (req, res) => {
    const dbPath = path.join(__dirname, '../db/db.json');
    
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read notes' });
        }

        try {
            const notes = JSON.parse(data);
            const newNote = {
                id: uuidv4(), ... req.body
            };
            notes.push(newNote);

            fs.writeFile(dbPath, JSON.stringify(notes, null, 2), (writeErr) => {
                if (writeErr){
                    console.err('Error writing to db.json:', writeErr);
                    return res.status(500).json({ error: 'Failed to save note'});
                }

                res.json(newNote);
            });
        } catch (parseErr){
            console.err("Error parsing JSON: ", parseErr);
            return res.status(500).json({ error: 'Failed to parse notes' });
        }
    });
});

module.exports = router;