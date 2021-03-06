const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");

// get All Users from Database
exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.findAllUsers();
        res.status(200).json({users: allUsers});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// get User by ID from Database
exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try{
        const user = await Users.findUserById(userId);
        if(user.length){
            res.status(200).json(user);
        }else{
            res.status(201).json({ error: `ID ${userId} bo'lgan foydalanuvchi yo'q!`});
        }
    }catch(error){
        res.status(500).json({error: `So'rovni bajarishda xatolik!`});
    }
}

// add new User to Database
exports.addUser = async (req, res) => {
    const newUser = req.body;
    if(!newUser.username) {
        res.status(404).json({error: "Username kiritilishi shart!"});
    } else {
        try {
            const userExists = await Users.findUserByUsername(newUser.username);
            if(userExists.length) {
                res.status(200).json({ message: 'Bu nom bilan foydalanuvchi saqlangan!' }); 
            } else {
                const user = await Users.addUser(newUser);
                res.status(201).json(user);
            }
        } catch (error) {
            res.status(500).json({error: error});
        }
    }
};

// update User by ID in Database
exports.updateUser = async (req, res) => {
    const newChanges = req.body;
    const userId = req.params.id;
    try {
        const addChanges = await Users.updateUser(userId, newChanges);
        res.status(200).json(addChanges);
    } catch (error) {
        res.status(500).json({ error: "Serverga ulanishda xatolik!" });
    }
}

// remove User by ID from Database
exports.removeUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const hasUser = await Users.findUserById(userId);
        if(!hasUser.length){
            res.status(404).json({ message: "Bunday foydalanuvchi yo'q!" });
        } else {
            const deleting = await Users.removeUser(userId);
            if(deleting){
                const deletingTasks = await Tasks.deletingTasksByUserId(userId);
                console.log(deletingTasks);
                res.status(200).json({
                    userMessage: "Foydalanuvchi o'chirildi!",
                    taskMessage: "Foydalanuvchiga oid barcha tasklar o'chirildi!"
                });
            } else {
                res.status(500).json({ message: "O'chirishda xatolik!" });
            }
        }
    } catch (error) {
        res.status(500).json({ error: "Serverga ulanishda xatolik!" });
    }
};