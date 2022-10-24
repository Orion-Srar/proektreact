import axios from "axios";

import {baseURL} from "../configs";

let axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWNkZDIxYmJiNjM3MmNjYTAxMjg2NmE4NThjNTc0YSIsInN1YiI6IjYzNGE0NTYxNDE0MjkxMDA5ODgyNmM1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.buQU0UbCJzHtvqH7kOY1dm84jzJZbK5n8Ejj9u8lwZk';
    return config;
})

export {
    axiosService
}