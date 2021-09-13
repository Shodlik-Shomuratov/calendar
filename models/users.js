const db = require("../config/db");

const find = () => {
    return db("users");
};

const findById = id => {
    return db("users").where('id', id);
}; 

const findByUsername = username => {
    return db("users").where('username', username);
};

const findByUsernameAndPassword = (username, password) => {
    return db("users").where('username', username).andWhere('password', password);
};

const addUser = user => {
    // const countUsers = db("users").count("username");
    // console.log(countUsers);
    return db("users").insert(user);
};

const updateUser =  (id, post) => {
    return db("users").where("id", id).update(post);
};

const removeUser = id => {
    return db("users").where("id", id).del();
};

module.exports = {
    find,
    findById,
    findByUsername,
    findByUsernameAndPassword,
    addUser,
    updateUser,
    removeUser
};