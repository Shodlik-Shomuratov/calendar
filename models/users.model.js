const db = require("../config/db");

const findAllUsers = () => {
    return db("users");
};

const findUserById = id => {
    return db("users").where('id', id);
}; 

const findUserByUsername = username => {
    return db("users").where('username', username);
};

const findUserByUsernameAndPassword = (username, password) => {
    return db("users").where('username', username).andWhere('password', password);
};

const addUser = user => {
    return db("users").insert(user);
};

const updateUser =  (id, post) => {
    return db("users").where("id", id).update(post);
};

const removeUser = id => {
    return db("users").where("id", id).del();
};

module.exports = {
    findAllUsers,
    findUserById,
    findUserByUsername,
    findUserByUsernameAndPassword,
    addUser,
    updateUser,
    removeUser
};