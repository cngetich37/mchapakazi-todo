const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
  getUsers
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");


router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
