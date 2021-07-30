import axiosService from './../utils/axiosService';

const endPoint = "products";

export const fetchProductsData = () => {
    return axiosService(endPoint);
}