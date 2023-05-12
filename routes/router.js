const express = require('express')

const router = express.Router()

const {getAllProducts, createProduct, getProductById, updateProduct} = require("./functionalities")

router.route("/all").get(getAllProducts)

router.route("/:id").get(getProductById).patch(updateProduct)

router.route("/add").post(createProduct)

module.exports = router