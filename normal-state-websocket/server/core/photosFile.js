const { getPhotosFile } = require('../api/file');
const { CacheService } = require('../utils/CacheService');

const ttl = 60 * 60 * 1; // Cache for 1 Hour.
const cache = new CacheService(ttl); // Create a new cache service instance.

const loadPhotos = async () => {
    let photos = null;
    try {
        const result = await getPhotosFile();
        if (result) {
            photos = result;
            cache.set('photos', result);
        }
    } catch (err) {
        throw Error(err);
    }
    return photos;
};

const coreGetPhotosFile = async (count) => {
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

const coreGetPhotosPagerFile = async (pageNumber, count) => {
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
    coreGetPhotosFile: coreGetPhotosFile,
    coreGetPhotosPagerFile: coreGetPhotosPagerFile
};