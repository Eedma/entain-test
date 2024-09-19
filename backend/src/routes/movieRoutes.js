const express = require("express");
const router = express.Router();

const {
    getPopularMovies,
    searchMovies,
} = require("../controllers/movieController");

router.get("/movies/popular", getPopularMovies);

router.get("/movies/search", searchMovies);

module.exports = router;
