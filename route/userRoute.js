const express = require("express")
const userController = require("../controllers/userController")

const router = express.Router()

router.get("/me",userController.getMe);
router.get("/address",userController.getAddress);
router.post("/createadd",userController.createAddress)
router.patch("/editadd",userController.editAddress)

module.exports = router;