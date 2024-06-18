const router = require("express").Router();
const { checkToken } = require('../../middlewares/token_validation');
const { addFavoriteController,
        getFavoritesByUserIdController } = require("./favorites.controller");

router.post('/', checkToken, addFavoriteController);
router.get('/:userId', checkToken, getFavoritesByUserIdController);

module.exports = router;
