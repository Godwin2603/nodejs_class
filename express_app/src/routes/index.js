const express = require("express");
// const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "../", "../", 'templates/index.html'))

  // res.render("index", { title: "Homepage", user: "John" });
});

router.get("/about", (req, res) => {
  // res.sendFile(path.join(__dirname, "../", "../", "templates/about.html"));
  // res.render("about", { title: "About page", description: "Welcome to the about page" });
  
});
module.exports = router;
