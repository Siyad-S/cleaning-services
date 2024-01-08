const mongoose = require("mongoose");

const productService = new mongoose.Schema({
    service_name: {
        required: true,
        type: String
    },
    category_id: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    duration: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('service-products', productService)