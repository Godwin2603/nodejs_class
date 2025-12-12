const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const fs = require("fs");     

const upload = multer({
  dest: "uploads/",
});

//get all files
router.get("/upload", (req, res, next) => {
  const files = [];
  res.sendFile(path.join(__dirname, "../../", "../templates/upload.html"));
});

//download file by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const file = id;
  return res.send(file);
});

//upload file
router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  console.log("file", file);
  return res.json({
    message: "uploaded successfully",
    saved_as: file.filename,
    original_name: file.originalname,
    size: file.size,
  });
});

//delete file by id
router.delete("/:id", (req, res) => {
  return res.send({});
});

//delete all files
router.delete("/", (req, res) => {
  fs.readdir("uploads", (err, files) => {
    if (err) return res.status(500).json({ message: "Failed to read uploads folder" });

    files.forEach((file) => {
      fs.unlinkSync(path.join("uploads", file));
    });

    res.json({ message: "All files deleted" });
  });
});

module.exports = router;
