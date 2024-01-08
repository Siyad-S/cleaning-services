const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('cleaningCategory', categorySchema)