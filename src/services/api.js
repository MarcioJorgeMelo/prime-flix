import axios from "axios";

// https://api.themoviedb.org/3/
// movie/now_playing?api_key=7b96996086a7da88b5ac7e51ef228998&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;