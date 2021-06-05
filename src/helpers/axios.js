import axios from 'axios';
import { api } from '../config';

const axiosInstance = axios.create({
    baseURL: api,
    // headers: {
    //     'Authorization': ''
    // }
});

export default axiosInstance;