const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    img: {
        type: String,
        trim:true
    },
    price: {
        type: Number,
        min: 0,
        required:true
    },
    desc: {
        type: String,
        trim:true
    }
})

let Product = mongoose.model('Product', productSchema);
module.exports = Product;
