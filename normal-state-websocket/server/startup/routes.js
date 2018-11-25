const express = require('express');
const cors = require('cors');
const photosAPI = require('../routes/photosAPI');
const photosFile = require('../routes/photosFile');
const error = require('../middleware/error');

// Define all routes of the API and error handling middleware.
module.exports = (app) => {

    // Cors.
    app.use(cors());
    app.options('*', cors());

    // Routes.
    app.use(express.json());
    app.use('/api/photosAPI', photosAPI);
    app.use('/api/photosFile', photosFile);

    // Error handling middleware.
    app.use(error);
};