const path = require('path');
const { addFavoriteController, getFavoritesByUserIdController } = require("./favorites.service");

module.exports = {
    addFavoriteController : async (req, res) => {
        const { userId, destinationId } = req.body;
        try {
            const favorite = await addFavoriteService(userId, destinationId);
            res.json({
                success: 1,
                message: "Destination added to favorites successfully",
                data: favorite,
            });
        } catch (error) {
            res.status(500).json({
                success: 0,
                message: "Failed to add favorite",
            });
        }
    },

    getFavoritesByUserIdController : async (req, res) => {
        const { userId } = req.params;
        try {
            const favorites = await getFavoritesByUserIdService(userId);
            res.json({
                success: 1,
                data: favorites,
            });
        } catch (error) {
            res.status(500).json({
                success: 0,
                message: "Failed to get favorites",
            });
        }
    }
}
