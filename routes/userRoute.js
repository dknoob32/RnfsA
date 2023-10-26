const express = require("express");
const { registerController, loginController, updateUserController, requireSignIn } = require("../controller/userController");


//router object
const router = express.Router();

//routes
// register
router.post('/register',registerController)

//login
router.post('/login',loginController)

//UPDATE || PUT
router.put("/update-user",requireSignIn, updateUserController);


module.exports = router;