const express = require('express');
const path = require('path');

const router = express.Router();

// Return the notes.html file
router.get("/notes", (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

// Returns index.html file
router.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = router;