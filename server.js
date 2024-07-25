const express = require('express');
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/html');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing application/json and urlencoded data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routers
app.use('/api', apiRouter);
app.use('/', htmlRouter);

// Starting the server
app.listen(PORT, () =>
    console.info(`Note taking app listening at http://localhost:${PORT}`)
);