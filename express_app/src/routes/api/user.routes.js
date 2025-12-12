const express = require("express");
const router = express.Router();
const UserService = require("../../services/user.service");
const userService = new UserService();

router.get("/", (req, res) => {
  const users = userService.getUsers();
  res.send(users);
});
router.get("/:username", (req, res) => {
  const { username } = req.params;
  const user = { username };
  return res.send(user);
});
module.exports = router;

