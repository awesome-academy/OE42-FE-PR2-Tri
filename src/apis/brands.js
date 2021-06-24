import axiosService from './../utils/axiosService';

const AND_POINT = "brands";

export const fetchBrandsData = () => {
    return axiosService(AND_POINT);
}