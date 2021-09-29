const express = require("express");
const path = require("path");
const server = express();

const morgan = require("morgan");
const cors = require("cors");

const usersRouter = require("./routes/users.router");
const tasksRouter = require("./routes/tasks.router");
const signRouter = require("./routes/sign.router");

// Middleware
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Routers
server.use("/api/users", usersRouter);
server.use("/api/tasks", tasksRouter);
server.use("/", signRouter);

server.use(express.static(path.join(__dirname, "/public")));

module.exports = server;