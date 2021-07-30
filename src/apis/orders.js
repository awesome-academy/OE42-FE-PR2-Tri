import axiosService from './../utils/axiosService';

const endPoint = "orders";

export const fetchOrdersData = () => {
    return axiosService(endPoint);
}

export const addOrdersData = (order) => {
    return axiosService(endPoint, "POST", order);
}