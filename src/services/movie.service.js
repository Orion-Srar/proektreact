import {axiosService} from "./axios.service";

import {urls} from "../configs";

const movieService = {
    getAll: (page = 1, with_genres = null) => axiosService.get(urls.discover, {params: {page, with_genres}}),
    getById: (id) => axiosService(urls.currentMovie + id),
    getSearch: (search = '') => axiosService(urls.search, {params: {query: search}})
}

export {
    movieService
}

