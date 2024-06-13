const {
    createDestination,
    getDestinationById,
    getDestinations,
    updateDestination,
    deleteDestination
} = require("./destination.service");

module.exports = {
    createDestination: (req, res) => {
        const body = req.body;
        createDestination(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                success: 0,
                message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getDestinationById: (req, res) => {
        const id = req.params.id;
        getDestinationById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                success: 0,
                message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    getDestinations: (req, res) => {
        getDestinations((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    updateDestination: (req, res) => {
        const body = req.body;
            updateDestination(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },

    deleteDestination: (req, res) => {
        const id = req.params.id;
        deleteDestination(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
                return res.json({
                    success: 1,
                    message: "Destination deleted successfully"
                });
        });
    }
};

