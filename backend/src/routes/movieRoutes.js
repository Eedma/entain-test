const express = require("express");
const router = express.Router();

const {
    getPopularMovies,
    searchMovies,
    getMovieDetails,
} = require("../controllers/movieController");

router.get("/movies/popular", getPopularMovies);

router.get("/movies/search", searchMovies);

router.get("/movie/:id", getMovieDetails);

module.exports = router;
