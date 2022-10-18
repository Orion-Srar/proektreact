import {axiosService} from "./axios.service";

import {urls} from "../configs";

const movieService = {
    getAll: (page = 1,with_keywords='') => axiosService.get(urls.discover, {params: {page,with_keywords}}),
    getById: (id) => axiosService(urls.currentMovie + id),
}

export {
    movieService
}

