import axiosService from './../utils/axiosService';

const andpoint = "orders";

export const fetchOrdersData = () => {
    return axiosService(andpoint);
}

export const addOrdersData = (order) => {
    return axiosService(andpoint, "POST", order);
}