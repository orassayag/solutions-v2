const { getPhotosAPI } = require('../api/api');
const { createPhotosFromJsons } = require('../models/photo');
const { CacheService } = require('../utils/CacheService');

const ttl = 60 * 60 * 1; // cache for 1 Hour
const cache = new CacheService(ttl); // Create a new cache service instance

const loadPhotos = async () => {
    let photos = null;
    try {
        const result = await getPhotosAPI();
        if (result) {
            photos = result.data;
            cache.set('photos', result.data);
        }
    } catch (err) {
        throw Error(err);
    }
    return photos;
};

const coreGetPhotosAPI = async (count) => {
    let photos = cache.get('photos');
    if (photos) {
        return slicePhotos(photos, count);
    } else {
        photos = await loadPhotos();
        if (photos) {
            photos = slicePhotos(photos, count);
        }
    }
    return photos;
};

const coreGetPhotosPagerAPI = async (pageNumber, count) => {
    let photos = cache.get('photos');
    if (photos) {
        return slicePhotos(photos, count);
    } else {
        photos = await loadPhotos();
        if (photos) {
            photos = slicePhotosPager(photos, pageNumber, count);
        }
    }
    return photos;
};

const coreAddPhotosFromAPI = async (data) => {
    let photos = cache.get('photos');
    if (!photos) {
        photos = await loadPhotos();
    }
    const newPhotos = createPhotosFromJsons(data.photos);
    cache.set('photos', [
        ...photos,
        ...newPhotos
    ]);
    return newPhotos;
};

const slicePhotos = (photos, count) => {
    if (count) {
        photos = photos.slice(0, count);
    } else {
        photos = photos;
    }
    return photos;
};

const slicePhotosPager = (photos, pageNumber, count) => {
    --pageNumber; // Because pages logically start with 1, but technically with 0.
    photos = photos.slice(pageNumber * count, (pageNumber + 1) * count);
    return photos;
}

module.exports = {
    coreGetPhotosAPI: coreGetPhotosAPI,
    coreGetPhotosPagerAPI: coreGetPhotosPagerAPI,
    coreAddPhotosFromAPI: coreAddPhotosFromAPI
};