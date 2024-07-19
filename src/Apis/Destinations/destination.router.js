const router = require("express").Router();
const { checkToken } = require("../../middlewares/token_validation");
const {
  createDestination,
  getDestinationById,
  getDestinations,
  updateDestination,
  deleteDestinationController,
} = require("./destination.controller");

router.get("/", getDestinations);
router.post("/", checkToken, createDestination);
router.get("/:id", getDestinationById);
router.patch("/:id", checkToken, updateDestination);
router.delete("/:id", checkToken, deleteDestinationController);

module.exports = router;
