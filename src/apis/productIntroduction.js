import axiosService from './../utils/axiosService';

const AND_POINT = "productIntroduction";

export const fetchProductIntroductionData = () => {
    return axiosService(AND_POINT);
}

export const addProductIntroductionData = (product) => {
    return axiosService(AND_POINT, "POST", product);
}