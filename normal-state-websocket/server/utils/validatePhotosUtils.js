const validateGetPhotos = (req) => {
    // Validate pageNumber and count parameters.
    if (!req.query.count) {
        return 'Missing count parameter';
    }

    const count = Number(req.query.count);
    if (isNaN(count)) {
        return 'Invalid count parameter';
    }

    return null;
};

const validateGetPhotosPager = (req) => {
    // Validate pageNumber and count parameters.
    if (!req.query.pageNumber || !req.query.count) {
        return 'Missing pageNumber or count parameters';
    }

    const pageNumber = Number(req.query.pageNumber);
    const count = Number(req.query.count);

    if (isNaN(pageNumber) || isNaN(count)) {
        return 'Invalid pageNumber or count parameters';
    }

    return null;
};

const validateAddPhotos = (req) => {
    // Validate body.
    if (!req.body) {
        return 'Missing body';
    }

    if (!req.body.photos) {
        return 'Body is empty';
    }

    return null;
};

module.exports = {
    validateGetPhotos: validateGetPhotos,
    validateGetPhotosPager: validateGetPhotosPager,
    validateAddPhotos: validateAddPhotos
};