const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// load env

dotenv.config({ path: "./config.env" });

const app = express();

// dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// profile routes

app.use("/v2/profile", require("./routes/profile"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`app running in ${process.env.NODE_ENV} port ${port}`);
});
