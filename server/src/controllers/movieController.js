const {
    fetchPopularMovies,
    searchMoviesByTitle,
    getMovieById,
} = require("../models/movieModel");

const getPopularMovies = async (req, res) => {
    const {page = 1} = req.query;
    try {
        const data = await fetchPopularMovies(page);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Search query is required"});
    }
};

const searchMovies = async (req, res) => {
    const {title, page = 1} = req.query;
    if (!title) {
        return res.status(400).json({error: "Search query is required"});
    }

    try {
        const data = await searchMoviesByTitle(title, page);
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to search movies"});
    }
};

const getMovieDetails = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({error: "Movie id is missing"});
    }
    try {
        const data = await getMovieById(id);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Failed to search for movie"});
    }
};

module.exports = {
    getPopularMovies,
    searchMovies,
    getMovieDetails,
};
