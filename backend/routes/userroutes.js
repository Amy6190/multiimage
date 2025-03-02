const express = require('express');
const router = express.Router();
const multer = require('multer');
const user = require('../models/user');
const path = require("path");

// Multer Storage Setup
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
  });
  
  const upload = multer({ storage });

  router.post("/", upload.array("images", 5), async (req, res) => {
    try {
      const { name, description } = req.body;
      const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
  
      const newProperty = new user({ name, description, images: imagePaths });
      await newProperty.save();
  
      res.status(201).json({ message: "Property uploaded successfully!", property: newProperty });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Get All Properties
  router.get("/", async (req, res) => {
    try {
      const properties = await user.find();
      res.json(properties);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;