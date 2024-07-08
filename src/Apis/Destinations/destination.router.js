const router = require("express").Router();
const { checkToken } = require("../../middlewares/token_validation");
const { createDestination, 
        getDestinationById, 
        getDestinations, 
        updateDestination, 
        deleteDestinationController 
    } = require("./destination.controller");

router.get("/", checkToken, getDestinations);
router.post("/", createDestination);
router.get("/:id", checkToken, getDestinationById);
router.patch("/:id", checkToken, updateDestination);
router.delete("/:id", checkToken, deleteDestinationController);

module.exports = router;
