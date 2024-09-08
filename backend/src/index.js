const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 6060;

app.use(cors());

const TMDB_API_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = process.env.TMDB_API_KEY;

app.get("/api/movies", async (req, res) => {
    try {
        const response = await axios.get(
            `${TMDB_API_URL}/movie/popular?api_key=${TMDB_API_KEY}`
        );
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({message: `Error fetching movies: ${error}`});
    }
});

app.get("/api/movies/search", async (req, res) => {
    const {title} = req.query;
    try {
        const response = await axios.get(
            `${TMDB_API_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
        );
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({message: "Error searching movies"});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
