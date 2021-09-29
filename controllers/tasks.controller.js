const Tasks = require("../models/tasks.model");
const Users = require("../models/users.model");

exports.findAllTasks = async (req, res) => {
    const userId = req.headers;
    try {
        const allTasks = await Tasks.getTasks();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({ error: "Bazaga ulanishda xatolik!" });
    }
};

exports.findTaskById = async (req, res) => {
    const taskId = req.params.task_id;
    try {
        const task = await Tasks.getTaskById(taskId);
        if(!task.length){
            res.status(200).json({ message: "Task topilmadi!" });
        } else {
            res.status(200).json(task);
        }
    } catch (error) {
        res.status(500).json({ error: "Serverga ulanishda xatolik!" });
    }
};


exports.findAllTasksByUserId = async (req, res) => {
    const userId = req.params.id;
    try {
        const tasks = await Tasks.getTasksByUserId(userId);
        if(!tasks.length){
            res.status(200).json({ message: "Foydalanuvchida tasklar mavjud emas!" });
        } else {
            res.status(200).json(tasks);
        }
    } catch (error) {
        res.status(500).json({ error: "Serverga ulanishda xatolik!" });
    }
};

exports.addTask = async (req, res) => {
    const newTask = req.body;
    const user = await Users.findUserById();
    if(!newTask.text && !newTask.position && !newTask.date && newTask.user_id){
        res.status(400).json({ message: "Ma'lumotlar to'liq kiritilsin!" });
    } else {
        try {
            const addTask = await Tasks.addTask(newTask);
            res.status(200).json(addTask);
        } catch (error) {
            res.status(500).json({ error: "Serverga ulanishda xatolik!" });
        }
    }
};


exports.deleteAllTasks = async (req,res) => {
    try{
        res.status(200).json(deleting);
    }catch{
        res.status(500).json({ message: "Serverga ulanishda xatolik!" });
    }
}
