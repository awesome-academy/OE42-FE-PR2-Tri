import axiosService from './../utils/axiosService';

const endPoint = "news";

export const fetchNewsData = () => {
    return axiosService(endPoint);
}