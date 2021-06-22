import axiosService from './../utils/axiosService';

const AND_POINT = "categories";

export const fetchCategoriesData = () => {
    return axiosService(AND_POINT);
}