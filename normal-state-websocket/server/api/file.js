// Get all photos from external json file.
const getPhotosFile = () => {
    const allPhotos = require('../datafile/photos.json');
    return allPhotos;
};

module.exports.getPhotosFile = getPhotosFile;