const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/users.js");
const datesRouter = require("./routes/dates.js");

// Middleware
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Routers
server.use("/", usersRouter);
server.use("/api/dates", datesRouter);

module.exports = server;