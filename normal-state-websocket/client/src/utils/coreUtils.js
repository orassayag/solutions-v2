export const getEnvironment = () => {
    return process.env.NODE_ENV || 'development';
};

export const updateObject = (oldObject, updatedProperties) => {
    if (!oldObject || !updatedProperties) {
        return null;
    }

    return {
        ...oldObject,
        ...updatedProperties
    };
};

const cloneObject = (cloneObjectData) => {

    if (!cloneObjectData || !cloneObjectData.originalObject || !cloneObjectData.newObject) {
        return null;
    }
    return Object.assign(Object.create(Object.getPrototypeOf(cloneObjectData.originalObject)), cloneObjectData.newObject);
};

export const cloneAndUpdateObject = (cloneAndUpdateObjectData) => {

    if (!cloneAndUpdateObjectData || !cloneAndUpdateObjectData.oldObject || !cloneAndUpdateObjectData.updatedProperties) {
        return null;
    }
    return cloneObject({
        originalObject: cloneAndUpdateObjectData.oldObject,
        newObject: { ...cloneAndUpdateObjectData.oldObject, ...cloneAndUpdateObjectData.updatedProperties }
    });
};