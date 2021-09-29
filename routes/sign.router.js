const router = require("express").Router();

const signController = require("../controllers/sign.controller");


router.get("/home", signController.home );
router.post("/signup", signController.signup );
router.get("/login", signController.login );


module.exports = router;