import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getAll: () => axiosService(urls.genre)
}

export {
    genreService
}