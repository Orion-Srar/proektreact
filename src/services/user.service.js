import {axiosService} from "./axios.service";

import {urls} from "../configs";

const userService = {
    getAll: axiosService(urls.account)
}

export {
    userService
}