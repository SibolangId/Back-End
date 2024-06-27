const router = require("express").Router();
const { checkToken } = require("../../middlewares/token_validation");
const upload = require("../../middlewares/upload");
const {
    createDestination,
    getDestinationById,
    getDestinations,
    updateDestination,
    deleteDestinationController,
} = require("./destination.controller");

router.get("/", checkToken, getDestinations);
router.post("/", createDestination);
router.get("/:id", getDestinationById);
router.patch("/:id", updateDestination);
router.delete("/:id", deleteDestinationController);

module.exports = router;
