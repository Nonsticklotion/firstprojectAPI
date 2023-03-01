const express = require("express")
const adminController = require ("../controllers/adminContoller")

const router = express.Router()



router.post("/addproduct",adminController.createProduct)

// router.delete("/efficiency",adminController)



module.exports = router;