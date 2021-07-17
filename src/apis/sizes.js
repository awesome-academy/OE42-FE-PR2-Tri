import axiosService from './../utils/axiosService';

const endPoint = "sizes";

export const fetchSizesData = () => {
    return axiosService(endPoint);
}