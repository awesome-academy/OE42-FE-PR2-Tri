import axiosService from './../utils/axiosService';

const endPoint = "roles";

export const fetchRolesData = () => {
    return axiosService(endPoint);
}
