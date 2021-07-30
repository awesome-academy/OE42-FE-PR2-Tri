import axiosService from './../utils/axiosService';

const endPoint = "users";

export const fetchUserData = () => {
    return axiosService(endPoint);
}

export const registerUser = (user) => {
    return axiosService(endPoint, "POST", user);
}

export const updateUser = (id, user) => {
    return axiosService(`${endPoint}/${id}`, "PUT", user);
}