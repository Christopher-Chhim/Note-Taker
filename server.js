const express = require('express');
const notes = require('../notes');
const fs = require('fs');
const indexRouter = require('./routes/index');
const notesRouter = require('./routes/apiRoutes');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use('/', indexRouter);
app.use('/', notesRouter);

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
    res.send(
        `Make a GET request using Insomnia to <a href "http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
    )
);

// Starting the server
app.listen(PORT, () =>
    console.info(`Note taking app listening at http://localhost:${PORT}`)
);