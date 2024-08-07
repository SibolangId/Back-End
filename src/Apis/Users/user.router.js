const router = require("express").Router();
const { checkToken } = require("../../middlewares/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
} = require("./user.controller");

router.get("/", checkToken, getUsers);
router.post("/", createUser);
router.get("/:id", getUserByUserId);
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", deleteUser);

module.exports = router;
