const express = require("express");
const fs = require("fs");
const path = require("path");
const { animals } = require("./data/animals.json");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// make front end files readily available
app.use(express.static("public"));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// implementing modularized routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});