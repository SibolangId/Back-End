const {
    createDestination,
    getDestinationById,
    getDestinations,
    updateDestination,
    deleteDestination,
} = require("./destination.service");
const { saveImageBlob } = require("../../middlewares/image_blob");
const upload = require("../../middlewares/upload");

module.exports = {
    createDestination: [
        upload.single("image"),
        async (req, res) => {
            const body = req.body;
            try {
                if (req.file) {
                    const optimizedImageBuffer = await saveImageBlob(req.file.buffer);
                    body.image_blob = optimizedImageBuffer;
                }
                createDestination(body, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: "Database connection error",
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        data: results,
                    });
                });
            } catch (err) {
                console.error(err);
                res.status(500).json({
                    success: 0,
                    message: "Error processing image",
                });
            }
        },
    ],

    getDestinationById: (req, res) => {
        const id = req.params.id;
        getDestinationById(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found",
                });
            }
            return res.json({
                success: 1,
                data: results,
            });
        });
    },

    getDestinations: (req, res) => {
        getDestinations((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                });
            }
            return res.json({
                success: 1,
                data: results,
            });
        });
    },

    updateDestination: [
        upload.single("image"),
        async (req, res) => {
            const body = req.body;
            const id = req.params.id;
            try {
                if (req.file) {
                    const optimizedImageBuffer = await saveImageBlob(req.file.buffer);
                    body.image_blob = optimizedImageBuffer;
                }
                updateDestination(id, body, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: "Database connection error",
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Updated successfully",
                        data: results,
                    });
                });
            } catch (err) {
                console.error(err);
                res.status(500).json({
                    success: 0,
                    message: "Error processing image",
                });
            }
        },
    ],

    deleteDestinationController: (req, res) => {
        const id = req.params.id;
        deleteDestination(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found",
                });
            }
            return res.json({
                success: 1,
                message: "Destination deleted successfully",
            });
        });
    },
};
