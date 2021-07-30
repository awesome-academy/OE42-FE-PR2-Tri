import axiosService from './../utils/axiosService';

const endPoint = "categories";

export const fetchCategoriesData = () => {
    return axiosService(endPoint);
}