const router = require("express").Router();

const tasksController = require("../controllers/tasks.controller");

// get all Tasks from Database
router.get("/", tasksController.findAllTasks);

// get Task by task id from Database
router.get("/:task_id", tasksController.findTaskById);

// get all Tasks by user ID from Database
router.get("/user/:id", tasksController.findAllTasksByUserId);

// add new Task to Database
router.post("/", tasksController.addTask);

module.exports = router;