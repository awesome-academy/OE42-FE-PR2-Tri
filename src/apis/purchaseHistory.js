import axiosService from './../utils/axiosService';

const AND_POINT = "purchaseHistory";

export const fetchPurchaseHistoryData = () => {
    return axiosService(AND_POINT);
}

export const addPurchaseHistoryData = (order) => {
    return axiosService(AND_POINT, "POST", order);
}