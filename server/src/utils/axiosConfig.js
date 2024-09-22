const axios = require("axios");
const TMDB_API_URL = "https://api.themoviedb.org/3/";

const axiosConfig = axios.create({
    baseURL: TMDB_API_URL,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
});

module.exports = axiosConfig;
