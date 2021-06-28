import axiosService from './../utils/axiosService';

const AND_POINT = "news";

export const fetchNewsData = () => {
    return axiosService(AND_POINT);
}