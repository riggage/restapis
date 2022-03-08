require("./db/connection");
const express = require("express");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(movieRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});