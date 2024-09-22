const axiosConfig = require("../utils/axiosConfig");

require("dotenv").config();

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const fetchPopularMovies = async (page = 1) => {
    const response = await axiosConfig.get(
        `movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
    );
    return response.data;
};

const searchMoviesByTitle = async (query, page = 1) => {
    const response = await axiosConfig.get(
        `search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=en-US&page=${page}`
    );
    return response.data;
};

const getMovieById = async (id) => {
    const response = await axiosConfig.get(
        `movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
    );
    console.log("response movie", response);
    return response.data;
};

module.exports = {
    fetchPopularMovies,
    searchMoviesByTitle,
    getMovieById,
};
