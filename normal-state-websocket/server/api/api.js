const axios = require('axios');
const environment = process.env.NODE_ENV || 'development';
const config = require(`../config/config.${environment}.json`);
const winston = require('winston');

// Get all photos from third party API.
const getPhotosAPI = async () => {
    let response = null;
    // Get the photos from the server.
    try {
        response = await axios.get(config.URL);
    } catch (err) {
        winston.error(err.message, err);
        throw Error('Failed to get photos');
    }

    return response;
}

module.exports.getPhotosAPI = getPhotosAPI;