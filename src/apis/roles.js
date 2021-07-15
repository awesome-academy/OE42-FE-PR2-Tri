import axiosService from './../utils/axiosService';

const AND_POINT = "roles";

export const fetchRolesData = () => {
    return axiosService(AND_POINT);
}
