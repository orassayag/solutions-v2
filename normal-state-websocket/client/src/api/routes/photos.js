import api from '../api';

// Handle the call to the API perform a 'GET' request to get all the photos.
export const getAllPhotos = (data) => {
    return new Promise((resolve, reject) => {
        try {
            api.get(`photosAPI/getPhotosPager?pageNumber=${data.pageNumber}&count=${data.count}`).then((response) => {
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
            api.get(`photosAPI/${photoId}`).then((response) => {
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