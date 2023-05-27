const getPhotoData = (photo) => {
    return {
        width: photo.width,
        height: photo.height,
        src: photo.src,
    }
};

export default getPhotoData;