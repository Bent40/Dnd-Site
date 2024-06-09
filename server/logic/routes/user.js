const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

router.get("/login", controller.Login);
router.post("/register", controller.register);

module.exports = router;
