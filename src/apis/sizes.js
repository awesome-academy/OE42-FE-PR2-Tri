import axiosService from './../utils/axiosService';

const AND_POINT = "sizes";

export const fetchSizesData = () => {
    return axiosService(AND_POINT);
}