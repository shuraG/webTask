
const APIURL = "http://localhost:8081";

export const getCarModel = async id => {
    const res = await fetch(`${APIURL}/cars/${id}/model`);
    return res.json();
};

export const getCarPictures = async id => {
    const res = await fetch(`${APIURL}/cars/${id}/images`);
    return res.json();
};

export const getURLPicture = id => {
    return `${APIURL}/image/${id}`;
};

export const getCar = async id => {
    const res = await fetch(`${APIURL}/cars/${id}`);
    return res.json();
};

export const getCarStatistics = async id => {
    const res = await fetch(`${APIURL}/cars/${id}/statistics`);
    return res.json();
};