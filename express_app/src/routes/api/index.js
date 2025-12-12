const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({message: "Welcome to our api"})
});

router.get("/about", (req, res) => {
  res.send({message: "Welcome to the about endpoint"})
});
module.exports = router;
