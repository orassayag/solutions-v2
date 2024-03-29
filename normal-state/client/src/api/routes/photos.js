import api from '../api';

// Handle the call to the API perform a 'GET' request to get all the photos.
export const getAllPhotos = (count) => {
    return new Promise((resolve, reject) => {
        try {
            api.get(`photos?count=${count}`).then((response) => {
                resolve(response.data);

            }).catch((error) => {
                console.log(error);
                reject(error);
            });

        } catch (error) {
            reject(error);
        }
    });
};

// Handle the call to the API to perform a 'GET' request for a single photo by Id.
export const getPhotoById = (photoId) => {
    return new Promise((resolve, reject) => {
        try {
            api.get(`photos/${photoId}`).then((response) => {
                resolve(response.data);

            }).catch((error) => {
                console.log(error);
                reject(error);
            });

        } catch (error) {
            reject(error);
        }
    });
};