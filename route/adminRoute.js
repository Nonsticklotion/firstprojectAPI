const express = require("express")
const adminController = require ("../controllers/adminContoller")

const router = express.Router()



router.post("/addproduct",adminController.createProduct)
router.put("/updateproduct",adminController.updateProduct)
router.delete("/addproduct",adminController.deleteProduct)

// router.delete("/efficiency",adminController)



module.exports = router;