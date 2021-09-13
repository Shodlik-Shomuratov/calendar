const db = require("../config/db");

const getDateTasks = (dateId) => {
    return db("tasks").where("date_id", dateId);
};


module.exports = {
    getDateTasks
};