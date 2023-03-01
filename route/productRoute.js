const express = require("express")
const productController = require("../controllers/productController")

const router = express.Router()



router.get("/getm1",productController)
router.get("/getm2",productController)


module.exports = router;