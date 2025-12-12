const express = require("express");
const router = express.Router();
const UserService = require("../../services/user.service");
const userService = new UserService();

const isAuthenticated = (req, res, next) => {
  const isAuth = req.query?.isAuth;
  if (isAuth) {
    console.log("User is Authenticated ");
    return next();
  }
  return res.send({message: "unauthorized"})
};

router.get("/", isAuthenticated, (req, res, next) => {
  //router level middleware
  const users = userService.getUsers();
  res.send(users);
});
router.get("/:username", (req, res) => {
  const { username } = req.params;
  const user = { username };
  return res.send(user);
});
module.exports = router;
