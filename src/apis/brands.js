import axiosService from './../utils/axiosService';

const endPoint = "brands";

export const fetchBrandsData = () => {
    return axiosService(endPoint);
}