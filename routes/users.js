const router = require("express").Router();

const usersController = require("../controllers/usersController");

// router.get('/', async (req, res) => {
//     try {
//         const allUsers = await Users.find();
//         res.status(200).json({users: allUsers});
//     } catch (error) {
//         res.status(500).json({error: error});
//     }
// });


// router.get('/:id', async (req, res) => {
//     const userId = req.params.id;
//     try{
//         const user = await Users.findById(userId);
//         if(user.length){
//             res.status(200).json(user);
//         }else{
//             res.status(201).json({ error: `ID ${userId} bo'lgan foydalanuvchi yo'q!`});
//         }
//     }catch(error){
//         res.status(500).json({error: `So'rovni bajarishda xatolik!`});
//     }
// });


router.get("/", usersController.getDatesAndTasks);

// router.post("/", async (req, res) => {
//     const newUser = req.body;
//     if(!newUser.username) {
//         res.status(404).json({error: "Username kiritilishi shart!"});
//     } else {
//         try {
//             const userExists = await Users.findByUsername(newUser.username)
//             if(userExists.length) {
//                 res.status(200).json({ error: 'Bu nom bilan foydalanuvchi saqlangan!' }); 
//             } else {
//                 const user = await Users.addUser(newUser);
//                 res.status(201).json(user);
//             }
//         } catch (error) {
//             res.status(500).json({error: "Foydalanuvchini qo'shishda xatolik yuz berdi"});
//         }
//     }
// });


// router.put('/:id', async (req, res) => {
//     const userId = req.params.id;
//     const newChanges = req.body;
//     if(!newChanges.username){
//         res.status(500).json({ error: "Username kiritilishi shart!"});
//     }else{
//         const userExists = await Users.findById(userId);
//         if(!userExists.length){
//             res.status(200).json({ error: `ID ${userId} bo'lgan foydalanuvchi yo'q!`});
//         }else{
//             const addChanges = await Users.updateUser(userId, newChanges);
//             res.status(200).json(addChanges);
//         }
//     }
// });

// router.delete("/:id", async (req, res) => {
//     const userId = req.params.id;
//     try {
//         const deleting = await Users.removeUser(userId);
//         if(deleting){
//             res.status(200).json({msg: `ID ${userId} bo'lgan foydalanuvchi o'chirildi!`});
//         } else {
//             res.status(200).json({msg: `ID ${userId} bo'lgan foydalanuvchi yo'q!`})
//         }
//     } catch(error) {
//         res.status(500).json({error: "O'chirishda xatolik!"});
//     }
// }); 


module.exports = router;