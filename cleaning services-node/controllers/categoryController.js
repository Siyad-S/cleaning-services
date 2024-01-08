const asyncHandler = require("express-async-handler");
const category = require("../models/categoryModel");

//get all categories
const getAllCategories = asyncHandler( async (req, res) => {
    const allCategories = await category.find();
    if(!allCategories) {
        res.status(404).json({message: "Error occured during getting all categories"});
    } else {
        res.status(200).json({message: "All categories are gotten successfully", allCategories});
    }
});


//post category
const postCategory = asyncHandler( async (req, res) => {
    try {
        const {category_name} = req.body
        if (!category_name) {
            res.status(404).json({message: "All fields are mandatory"});
        } else {
            const categoryData = await category.create({
                category_name
            });
            console.log(category)
            res.status(200).json({message: "Category posted successfully", categoryData});
        }
    } catch (err) {
        res.status(500).json({err: err});
    }
});

//update categories
const updateCategory = asyncHandler( async (req, res) => {
    const categoryData = {...req.body}
    const updateCategoryWithId = await category.findByIdAndUpdate(req.params.id, categoryData, {new:true});
    if (!updateCategoryWithId) {
        res.status(401).json({message: "Error occured during updation"});
    } else {
        res.status(200).json({message: "Category updated successfully", updateCategoryWithId});
    }
})

//delete categories

const deleteCategory = asyncHandler( async (req, res) => {
    const deleteCategoryWithId = await category.findByIdAndDelete(req.params.id);
    if (!deleteCategoryWithId) {
        res.status(404).json({message: "Error occured during deletion"});
    } else {
        res.status(200).json({message: "Category deleted successfully", deleteCategoryWithId});
    }
})

module.exports = {
    getAllCategories,
    postCategory,
    updateCategory,
    deleteCategory
}