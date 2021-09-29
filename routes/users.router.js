const router = require("express").Router();

const usersController = require("../controllers/users.controller");

// get All Users from Database
router.get('/', usersController.getAllUsers);

// get User by ID from Database
router.get('/:id', usersController.getUserById);

// add new User to Database
router.post("/", usersController.addUser);

// update User by ID in Database
router.put("/:id", usersController.updateUser); 

// remove User by ID from Database
router.delete("/:id", usersController.removeUser);


module.exports = router;