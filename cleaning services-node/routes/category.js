const express = require('express');
const router = express.Router()
const {
    getAllCategories,
    postCategory,
    updateCategory,
    deleteCategory
} = require("../controllers/categoryController")

router.route("/").get(getAllCategories).post(postCategory)
router.route("/:id").put(updateCategory).delete(deleteCategory)

module.exports = router;