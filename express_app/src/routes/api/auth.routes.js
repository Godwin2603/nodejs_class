const express = require("express");
const { registerUser } = require("../../services/auth.services");
const router = express.Router();

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const result = registerUser({ name, email, password });
  return res.send(result);
});
module.exports = router;
