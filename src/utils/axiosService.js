import * as config from '../constants/config';
import axios from 'axios';

export default function axiosService(endpoint, method = "GET", body = "null"){
    return axios({
                method: method,
                url: `${config.API_URL}/${endpoint}`,
                data: body
            })
}