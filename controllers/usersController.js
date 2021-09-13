const Users = require("../models/users.js");
const Dates = require("../models/dates.js");
const Tasks = require("../models/tasks.js");


exports.getDatesAndTasks = async (req, res) => {
    const userFront = req.body;
    try{
        const userBack = await Users.findByUsernameAndPassword(userFront.username, userFront.password);
        if(!userBack.length){
            res.status(500).json({
                message: "Username yoki Password xato!"
            });
        } else {
            const userId = userBack[0].id;
            const userDates = await Dates.getDateById(userId);
            userDates.forEach(async userDate => {
                const dateId = userDate.id;
                const tasks = await Tasks.getDateTasks(dateId);
                userDate = Object.assign(userDate, { tasks: tasks });
            });
            res.status(200).json(
                {
                    user: userBack[0],
                    dates: userDates
                });
        }
        
    }catch(error){
        res.status(500).json({ error: "Serverga ulanishda xatolik!" })
    }
}