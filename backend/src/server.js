const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", movieRoutes);

// server
const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
