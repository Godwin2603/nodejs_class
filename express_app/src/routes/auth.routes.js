const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "../", "templates/signup.html"));
});
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (!username || !email || !password) {
    return res.redirect("/signup?signup=error");
  }
  res.redirect("/signup?signup=sucess");
});

module.exports = router;
