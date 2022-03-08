const { Router } = require("express");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movies", addMovie);
movieRouter.get("/movies", listMovies);
movieRouter.patch("/movies", updateMovie);
movieRouter.delete("/movies/:filterKey/:filterVal", deleteMovie);

module.exports = movieRouter;