const products = require("../models/products")

const getAllProducts = async(req,res)=>{
    try {
        const allProducts = await products.find({})
        return res.status(200).json(allProducts)
    } catch (error) {
        return res.status(404).json({msg : "Not found"})
    }
}

const getProductById = async(req,res)=>{
    try {
        let productId = req.params.id
        const requiredProduct = await products.findById({_id : productId})
        return res.status(200).json(requiredProduct)
    } catch (error) {
        return res.status(404).json({msg : "Not found"})
    }
}

const createProduct = async(req,res)=>{
    try {
        const {name, description, price} = req.body
        if(!name){
            return res.status(400).json({"msg" : "No name provided"})
        }
        if(!price){
            return res.status(400).json({"msg" : "No price provided"})
        }
        if(!description){
            return res.status(400).json({"msg" : "No description provided"})
        }
        const newProduct = await products.create({name, description, price})
        return res.status(201).json({msg : "Product added"})
    } catch (error) {
        return res.status(500).json({msg : error.message})
    }
}

const updateProduct = async(req,res)=>{
    try {
        const {id:productId} = req.params
        const {price} = req.body
        if(!price){
            return res.status(400).json({"msg" : "Incomplete request"})   
        }
        const updatedProduct = await products.findOneAndUpdate({_id: productId}, {price}, {
            new: true, runValidators: true
        })
        return res.status(201).json({updateProduct})
    } catch (error) {
        return res.status(400).json({"msg" : error.message})
    }
}
module.exports = {getAllProducts, getProductById, createProduct, updateProduct}