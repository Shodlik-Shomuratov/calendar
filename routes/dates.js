const router = require("express").Router();

const Dates = require("../models/dates");
const Users = require("../models/users");

router.get("/", async (req, res) => {
    try{
        const allDate = await Dates.getAllDate();
        res.status(200).json(allDate);
    }catch(error){
        res.status(500).json({ error: "Bazaga ulanishda xatolik!" });
    }
});

router.get("/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        const hasUser = await Users.findById(userId);
        if(!hasUser.length){
            res.status(201).json({ error: `ID ${userId} bo'lgan foydalanuvchi yo'q!`});
        } else {
            const data = await Dates.getDateById(userId);
            if(!data.length){
                res.status(404).json({ error: `Ma'lumotlar bo'sh!` });
            } else {
                res.status(200).json(data);
            }
        }
    } catch(error) {
        res.status(500).json({ error: "Ma'lumotlarni olib bo'lmadi!"});
    }
});


router.post("/", async (req, res) => {
    const newDate = req.body;
    try{
        const addDate = await Dates.addDate(newDate);
        console.log(addDate);
        res.status(200).json(addDate);
    } catch(error){
        res.status(500).json({ error: "Ma'lumotlarni qo'shishda xatolik!"});
    }
});

module.exports = router;