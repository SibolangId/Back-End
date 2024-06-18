const router = require("express").Router();
const { checkToken } = require("../../middlewares/token_validation");
const upload = require("../../middlewares/upload");
const {
    createDestination,
    getDestinationById,
    getDestinations,
    updateDestination,
    deleteDestination,
} = require("./destination.controller");

router.get("/", checkToken, getDestinations);
router.post("/", checkToken, createDestination);
router.get("/:id", checkToken, getDestinationById);
router.patch("/", checkToken, updateDestination);
router.delete("/:id", checkToken, deleteDestination);

module.exports = router;
