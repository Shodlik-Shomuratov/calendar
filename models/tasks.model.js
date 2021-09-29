const db = require("../config/db");

const getTasks = () => {
    return db("tasks");
};

const getTaskById = taskId => {
    return db("tasks").where("id", taskId);
};

const getTasksByUserId = (userId) => {
    return db("tasks").where("user_id", userId);
};

const addTask = (newTask) => {
    return db("tasks").insert(newTask);
};

const updateTask = (taskId, newChanges) => {
    return db("tasks").where("id", taskId).update(newChanges);
};

const deletingTasksByUserId = userId => {
    return db("tasks").where("user_id", userId);
};

module.exports = {
    getTasks,
    getTaskById,
    getTasksByUserId,
    addTask,
    updateTask,
    deletingTasksByUserId
};