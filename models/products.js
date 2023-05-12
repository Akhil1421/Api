const mongoose = require("mongoose")

const products = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'product must have a name'],
        trim : true,
    },
    description : {
        type : String,
        trim: true,
        required : true,
        maxlength : [100, "can't be more than 100 characters"]
    },
    price : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('products', products)