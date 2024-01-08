const express = require("express");
const router = express.Router();
const {
  getCleaningServices,
  postCleaningService,
  updateCleaningService,
  deleteCleaningService,
} = require("../controllers/productController");

router.route("/").get(getCleaningServices).post(postCleaningService)
router.route("/:id").put(updateCleaningService).delete(deleteCleaningService)

module.exports = router