import axiosService from './../utils/axiosService';

const endPoint = "purchaseHistory";

export const fetchPurchaseHistoryData = () => {
    return axiosService(endPoint);
}

export const addPurchaseHistoryData = (order) => {
    return axiosService(endPoint, "POST", order);
}