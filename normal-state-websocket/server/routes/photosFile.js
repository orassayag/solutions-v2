const express = require('express');
const router = express.Router();
const { parsePhotos } = require('../models/photo');
const { coreGetPhotosFile, coreGetPhotosPagerFile } = require('../core/photosFile');
const { validateGetPhotos, validateGetPhotosPager } = require('../utils/validatePhotosUtils');

// Get all photos.
const getAllPhotosFile = async (count) => {
    // Get all the photos from the server.
    let response = null;
    try {
        response = await coreGetPhotosFile(count);
    } catch (err) {
        throw Error(err);
    }

    let allPhotos = null;
    if (response) {
        allPhotos = parsePhotos(response);
    }
    return allPhotos;
}

// Get all photos.
const getAllPhotosPagerFile = async (pageNumber, count) => {
    // Get all the photos from the server.
    let response = null;
    try {
        response = await coreGetPhotosPagerFile(pageNumber, count);
    } catch (err) {
        throw Error(err);
    }

    let allPhotos = null;
    if (response) {
        allPhotos = parsePhotos(response);
    }
    return allPhotos;
};

router.get('/getPhotos', async (req, res) => {

    // Validate from and top parameters.
    const validateResult = validateGetPhotos(req);
    if (validateResult) {
        return res.status(400).send(validateResult);
    }

    // Return all the photos.
    const count = Number(req.query.count);
    let allPhotos = null;
    try {
        allPhotos = await getAllPhotosFile(count);
    } catch (err) {
        return res.status(400).send(err.message);
    }

    return res.status(200).send(allPhotos);
});

// Get all photos by pageNumber and count.
router.get('/getPhotosPager', async (req, res) => {

    // Validate from and top parameters.
    const validateResult = validateGetPhotosPager(req);
    if (validateResult) {
        return res.status(400).send(validateResult);
    }

    // Return all the photos.
    const pageNumber = Number(req.query.pageNumber);
    const count = Number(req.query.count);

    let allPhotos = null;
    try {
        allPhotos = await getAllPhotosPagerFile(pageNumber, count);
    } catch (err) {
        return res.status(400).send(err.message);
    }

    return res.status(200).send(allPhotos);
});

// Get a specific photo by Id and return it.
router.get('/:id', async (req, res) => {
    // Validate that the request body is not empty and the request body parameters.
    if (!req) {
        return res.status(400).send('No request object.');
    }

    if (!req.params.id) {
        return res.status(400).send('No Id parameter.');
    }

    // Get all the photos.
    const allPhotos = await getAllPhotosFile();
    if (!allPhotos) {
        return res.status(400).send('Failed to get all photos.');
    }

    const photoId = Number(req.params.id.trim());
    const photo = allPhotos.find(p => p.id === photoId);
    if (!photo) {
        return res.status(404).send(`Photo ${photoId} not found.`);
    }

    // Return selected photo.
    return res.status(200).send(photo);
});

module.exports = router;