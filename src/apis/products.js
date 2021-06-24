import axiosService from './../utils/axiosService';

const AND_POINT = "products";

export const fetchProductsData = () => {
    return axiosService(AND_POINT);
}