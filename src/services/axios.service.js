import axios from "axios";

import {baseURL} from "../configs";
import {token} from "../token/token";

let axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = token;
    return config;
})

export {
    axiosService
}