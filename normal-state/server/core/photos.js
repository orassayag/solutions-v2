const { getPhotosAPI, getPhotosFile } = require('../api/api');
const { CacheService } = require('../utils/CacheService');

const ttl = 60 * 60 * 1; // Cache for 1 Hour.
const cache = new CacheService(ttl); // Create a new cache service instance.

const coreGetPhotosAPI = (count) => {
    let photos = cache.get('photos');
    if (photos) {
        return slicePhotos(photos, count);
    } else {
        getPhotosAPI().then((result) => {
            cache.set('photos', result.data);
            return slicePhotos(result.data, count);
        }).catch(err => {
            throw Error(err);
        });
    }
};

const coreGetPhotosFile = (count) => {
    let photos = cache.get('photos');
    if (photos) {
        return slicePhotos(photos, count);
    } else {
        getPhotosFile().then((result) => {
            cache.set('photos', result.data);
            return slicePhotos(result.data, count);
        }).catch(err => {
            throw Error(err);
        });
    }
};

const slicePhotos = (photos, count) => {
    if (count) {
        photos = photos.slice(0, count);
    } else {
        photos = photos;
    }
    return photos;
};

module.exports = {
    coreGetPhotosAPI: coreGetPhotosAPI,
    coreGetPhotosFile: coreGetPhotosFile
};