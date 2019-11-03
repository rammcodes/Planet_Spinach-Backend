const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/category/new", async (req, res) => {
  const { name } = req.body;
  try {
    await db("categories").insert({ name });
    res.status(200).json("Category Added Successfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
