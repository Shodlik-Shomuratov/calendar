require("dotenv").config();
const jwt = require("jsonwebtoken");
const Sign = require("../models/sign.model");
const Users = require("../models/users.model");
const Tasks = require("../models/tasks.model");


exports.home = async (req, res) => {
    try {
        const token = req.headers.cookie.split("=")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, data) => {
            if(err){
                res.status("400").json({ msg: "Siz hali ulanmagansiz!" });
            }else{
                console.log(data);
                const userId = data.id;
                // const userTasks = await Tasks.getTasksByUserId(userId);
                res.status(200).json({ message: "Siz muvaffaqiyatli kirdingiz!" });
            }
        });
    } catch (err) {
        res.status(500).json({ err: "Serverga ulanishda xatolik!" });
    }
};


exports.signup = async (req, res) => {
    const user = req.body;
    const userName = req.body.username;
    const userPass = req.body.password;
    try {
        const hasUser = await Users.findUserByUsername(userName);
        if(hasUser.length){
            res.status(301).json({ msg: "Bu nom bazaga kiritilgan!" });
        }else{
            const creating = await Users.addUser(user);
            res.status(200).json({ msg: "Ma'lumot kiritildi!" });
        }
    } catch (error) {
        res.status(500).json({ err: "Serverga ulanishda xatolik!" });
    }
};


exports.login = async (req, res) => {
    const userName = req.query.username;
    const userPass = req.query.password;
    const hasUser = await Users.findUserByUsername(userName);
    if(!hasUser.length){
        res.status(404).json({ msg: "Siz hali ro'yxatdan o'tmagansiz!" });
    }else if(hasUser[0].password !== userPass){
        res.status("200").json({ msg: "Password xato kiritilgan!" });
    }else{
        try {
            const token = jwt.sign({
                id: hasUser[0].id,
                name: hasUser[0].username
             },process.env.ACCESS_TOKEN_SECRET);
            res.cookie("token", token);
            res.status(201).json({ msg: "Muvaffaqiyatli bajarildi!" });
        } catch (err) {
            res.status(500).json({ err: "Serverga ulanishda xatolik!" });
        }
    }
}