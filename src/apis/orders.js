import axiosService from './../utils/axiosService';

const AND_POINT = "orders";

export const fetchOrdersData = () => {
    return axiosService(AND_POINT);
}

export const addOrdersData = (order) => {
    return axiosService(AND_POINT, "POST", order);
}