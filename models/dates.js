const db = require('../config/db');

const getAllDate = () => {
    return db("dates");
}

const getDateById = (userId) => {
    return db("dates").where("userId", userId);
}

const addDate = (date) => {
    return db("dates").insert(date);
}

module.exports = {
    getDateById,
    addDate
};