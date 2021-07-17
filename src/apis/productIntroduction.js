import axiosService from './../utils/axiosService';

const endPoint = "productIntroduction";

export const fetchProductIntroductionData = () => {
    return axiosService(endPoint);
}

export const addProductIntroductionData = (product) => {
    return axiosService(endPoint, "POST", product);
}