const asyncHandler = require("express-async-handler");
const product = require("../models/productModel");

//get products
const getCleaningServices = asyncHandler(async (req, res) => {
    const services = await product.find()
    if(!services) {
        res.status(404).json({message:"Error occured on getting cleaning services"});
    } else {
        res.status(200).json({})
    }
})

//post products
const postCleaningService = asyncHandler(async (req, res) => {
    try {
        const {service_name, category_id, description, price, duration} = req.body;

        if(!service_name || !category_id || !description || !price || !duration) {
            res.status(404).json({message:"all fields are mandatory"});
        } else {
            const service = await product.create({
                service_name,
                category_id,
                description,
                price,
                duration
            });
            res.status(200).json({message: "service successfully created", service});
        }
    } catch(error) {
        res.status(500).json({error: error});
    }
})

//update products
const updateCleaningService = asyncHandler(async (req, res) => {
    const service = {...req.body}
    const updateService = await product.findByIdAndUpdate(req.params.id, service, {new:true});
    if(!updateService) {
        res.status(404).json({message:"error occured during updation"});
    } else {
        res.status(200).json({message:"successfully service products are updated"});
    }
})

//get products
const deleteCleaningService = asyncHandler(async (req, res) => {
    const updateService = await product.findByIdAndDelete(req.params.id);
    if(!updateService) {
        res.status(404).json({message:"error occured during deletion of service product"});
    } else {
        res.status(200).json({message:"successfully service products are deleted"});
    }
})

module.exports = {
    getCleaningServices,
    postCleaningService,
    updateCleaningService,
    deleteCleaningService
}