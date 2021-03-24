// Get all photos from an external json file.
const getPhotosFile = () => {
    const allPhotos = require('../datafile/photos.json');
    return allPhotos;
};

module.exports.getPhotosFile = getPhotosFile;